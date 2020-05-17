
import { applyTotemEffect } from './calculateFields'
import { calculateIndexFromPosition, calculatePositionFromIndex } from '../../logic/calculatePositions'
import { returnAdjacentCoordinates } from './calculateFields'
import { v4 as uuidv4 } from 'uuid'

export type TotemType = 'FIRE' | 'ELECTRIC' | 'LIGHT' | 'WATER' | 'WIND' | 'EARTH'

export type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST' | 'NORTHEAST' | 'SOUTHEAST' | 'NORTHWEST' | 'SOUTHWEST' | 'NONE' | null

export type FieldType = 'BURNING' | 'FLOODED' | 'SMOKEY' | 'STEAMY' | 'ELECTRIC_CURRENT' | 'BRIGHT' | 'WINDY' | 'EARTH'

export type Totem = { type: TotemType, direction: Direction, id: string }

export type Tile = {
  totem: Totem
  fields: Array<FieldType>
}

export type Tiles = { [key: string]: Tile }

type LightBeam = { indices: Array<number>, direction: Direction }

export type State = {
  tiles: Tiles,
  lightBeams: Array<LightBeam>,
  totemSelection: TotemType,
  dimension: number
}

const initialDimension = 8

const initialTile = { totem: null, fields: [] }
const initialIndices = Array(initialDimension * initialDimension).fill(1).map((_, index) => index)
const initialTiles = initialIndices.reduce((acc, curr) => ({ ...acc, [curr]: { ...initialTile }}), {})

export type Action = 
{ type: 'ADD_TOTEM', payload: { index: number, totemType: TotemType }} |
{ type: 'CHANGE_TOTEM_SELECTION', payload: { totemType: TotemType }} |
{ type: 'CHANGE_TOTEM_DIRECTION', payload: { totemIndex: number, direction: Direction }}

const initialState: State = { tiles: initialTiles, lightBeams: [], totemSelection: 'FIRE', dimension: initialDimension }

const canTotemBeInField = (totemType: TotemType, fields: Array<FieldType>) => {
  return fields.length === 0 ||
  (totemType === 'FIRE' && fields[0] === 'BURNING' && fields.length === 1)

}

const getInitialDirectionFromTotemType = (totemType: TotemType): Direction => {
  if(totemType === 'LIGHT' || totemType === 'ELECTRIC') {
    return 'SOUTH'
  }
  return null;
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
    if(tilesToAddWaterTo.length !== 0) {
      tilesToAddWaterTo.forEach(index => {
        newTiles[index] = {...newTiles[index], fields: [...newTiles[index].fields, 'FLOODED' ] }
      })
    }
  })
  if(tilesToAddWaterTo.length > 0) {
    return doEarthWaterDispersion(newTiles, dimension)
  } else {
    return newTiles
  }
}

const calculateBeamsFromStartingPoint = (tiles: Tiles, startIndex: number, direction: Direction, dimension: number): Array<LightBeam>=> {
const initialPosition = calculatePositionFromIndex(startIndex, dimension)
const possibleIndices = []

if (direction === 'EAST') {
  let eastCounter = initialPosition.column
  while(eastCounter != dimension) {
    const possiblePosition = { row: initialPosition.row, column: eastCounter }
    possibleIndices.push(calculateIndexFromPosition({ ...possiblePosition, dimension }))
    eastCounter += 1;
  }
  if(possibleIndices.length > 0) {
    const steamyTileIndices = possibleIndices.filter(index => tiles[index].fields.includes('FLOODED') && tiles[index].fields.includes('BURNING'))
    const smokeyTileIndices = possibleIndices.filter(index => tiles[index].fields.includes('EARTH') && tiles[index].fields.includes('BURNING'))
    const firstSteamyTileIndex = steamyTileIndices[0]
    const firstSmokeyTileIndex = smokeyTileIndices[0]

    if((steamyTileIndices.length > 0 && smokeyTileIndices.length === 0) || 
    (steamyTileIndices.length > 0 && smokeyTileIndices.length > 0 && firstSteamyTileIndex < firstSmokeyTileIndex)) {
      const indexInArrayOfFirstSteamyTile = possibleIndices.findIndex(index => index === firstSteamyTileIndex)
      const cutOffLightBeam = possibleIndices.slice(0, indexInArrayOfFirstSteamyTile)
      return [{ indices: cutOffLightBeam, direction }, 
        ...calculateBeamsFromStartingPoint(tiles, firstSteamyTileIndex, 'NORTHEAST', dimension),
        ...calculateBeamsFromStartingPoint(tiles, firstSteamyTileIndex, 'SOUTHEAST', dimension)]
    }
  }
  return [{ indices: [], direction  }]

} else if (direction === 'WEST') {

} else if (direction === 'NORTH') {

} else if (direction === 'SOUTH') {

} else if (direction === 'NORTHEAST') {

} else if (direction === 'NORTHWEST') {

} else if (direction === 'SOUTHEAST') {

} else if (direction === 'SOUTHWEST') {

} else {
  return { indices: [], direction }
}
}

const calculateLightBeams = (tiles: Tiles) => {
  const lightTotems = Object.keys(tiles)
  .map(index => ({ totem: tiles[index].totem, index }))
  .filter(item => item.totem?.type === 'LIGHT')
  console.log('lighttotems:', lightTotems)
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
    newTiles[index] = { ...newTiles[index], totem: { type: totemType, direction: getInitialDirectionFromTotemType(totemType), id: uuidv4() } }
    const newTilesAfterWaterDispersion = doEarthWaterDispersion(newTiles, dimension)
    calculateLightBeams(newTiles)
    return { ...state, tiles: newTilesAfterWaterDispersion }
  }

  return state;
}


const changeTotemDirection = (state: State, totemIndex: number, direction: Direction): Tiles => {
  const { tiles } = state
  const { totem } = tiles[totemIndex]
  const newTotem = { ...totem, direction }
  const newTiles = { ...tiles, [totemIndex]: { ...tiles[totemIndex], totem: newTotem }}
  calculateLightBeams(newTiles)
  return newTiles
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
    case 'CHANGE_TOTEM_DIRECTION':
      return {
        ...state,
        tiles: changeTotemDirection(state, action.payload.totemIndex, action.payload.direction)
      };
    default:
      return state;
  }
}

export default reducer;