
import { applyTotemEffect } from './calculateFields'
import { calculateIndexFromPosition, calculatePositionFromIndex } from '../../logic/calculatePositions'
import { returnAdjacentCoordinates } from './calculateFields'

export type TotemType = 'FIRE' | 'ELECTRIC' | 'LIGHT' | 'WATER' | 'WIND' | 'EARTH'

export type FieldType = 'BURNING' | 'FLOODED' | 'SMOKEY' | 'STEAMY' | 'ELECTRIC_CURRENT' | 'BRIGHT' | 'WINDY' | 'EARTH'

export type Tile = {
  totem: TotemType
  fields: Array<FieldType>
}

export type Tiles = { [key: string]: Tile }

export type State = {
  tiles: Tiles,
  totemSelection: TotemType,
  dimension: number
}

const initialDimension = 8

const initialTile = { totem: null, fields: [] }
const initialIndices = Array(initialDimension * initialDimension).fill(1).map((_, index) => index)
const initialTiles = initialIndices.reduce((acc, curr) => ({ ...acc, [curr]: { ...initialTile }}), {})

export type Action = 
{ type: 'ADD_TOTEM', payload: { index: number, totemType: TotemType }} |
{ type: 'CHANGE_TOTEM_SELECTION', payload: { totemType: TotemType }}

const initialState: State = { tiles: initialTiles, totemSelection: 'FIRE', dimension: initialDimension }

const canTotemBeInField = (totemType: TotemType, fields: Array<FieldType>) => {
  return fields.length === 0 ||
  (totemType === 'FIRE' && fields[0] === 'BURNING' && fields.length === 1)

}

const doEarthWaterDispersion = (tiles: Tiles, dimension: number): Tiles => {
  const indicesWithTiles = Object.keys(tiles)
  const tilesIndicesWithEarthAndWater = indicesWithTiles
  .filter(index => tiles[index].fields.includes('FLOODED') && tiles[index].fields.includes('EARTH'))

  if(tilesIndicesWithEarthAndWater.length === 0) {
    return tiles;
  }

  const newTiles: Tiles = { ...tiles }
  const tilesToAddWaterTo: Array<number> = []

  tilesIndicesWithEarthAndWater.forEach(index => {
    const adjacentCoordinates = returnAdjacentCoordinates(parseInt(index), dimension)
    const adjacentIndices = adjacentCoordinates.map(coord => calculateIndexFromPosition({ ...coord, dimension }))

    adjacentIndices.forEach(index => {
      const tile = tiles[index]
      const { fields, totem } = tile;
      if(!fields.includes('FLOODED') && totem == null) {
        tilesToAddWaterTo.push(index)
      }
    })
    if(tilesToAddWaterTo.length === 0) {
      return newTiles
    } else {
      tilesToAddWaterTo.forEach(index => {
        newTiles[index] = {...newTiles[index], fields: [...newTiles[index].fields, 'FLOODED' ] }
      })
    }
  })
  return doEarthWaterDispersion(newTiles, dimension)
}

const addTotemToBoard = (state: State, totemType: TotemType, index: number): State => {
  const { tiles, dimension } = state
  const tile = tiles[index] || { totem: null, fields: [] }
  const newTiles: Tiles = { ...state.tiles }

  if(tile.totem) {
    return state
  }
  if(canTotemBeInField(totemType, tile.fields)) {
    const totemEffects = applyTotemEffect(totemType, index, dimension)

    totemEffects.forEach((totemEffect) => {
      const effectIndex = totemEffect.index
      const { fieldType } = totemEffect

      const tileStateAtIndex = state.tiles[effectIndex] || { totem: null, fields: [] }
      const { fields } = tileStateAtIndex
      if(!fields.includes(fieldType)) {
        newTiles[`${effectIndex}`] = { ...tileStateAtIndex, fields: [...fields, fieldType ]}
      }
    })
    newTiles[index] = { ...newTiles[index], totem: totemType }
    const newTilesAfterWaterDispersion = doEarthWaterDispersion(newTiles, dimension)
    return { ...state, tiles: newTilesAfterWaterDispersion }
  }

  return state;
}

const reducer = (state: State = initialState, action: Action): State => {
  switch(action.type) {
    case 'ADD_TOTEM':
      return addTotemToBoard(state, action.payload.totemType, action.payload.index)
    case 'CHANGE_TOTEM_SELECTION':
      return {
        ...state,
        totemSelection: action.payload.totemType
      };
    default:
      return state;
  }
}

export default reducer;