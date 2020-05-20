
import { applyTotemEffect } from './calculateFields'
import { v4 as uuidv4 } from 'uuid'
import calculateLightBeams from './calculateLightBeams'
import doEarthWaterDispersion from './doEarthWaterDispersion'
import electrify from './calculateElectrification'

export type TotemType = 'FIRE' | 'ELECTRIC' | 'LIGHT' | 'WATER' | 'WIND' | 'EARTH'

export type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST' | 'NORTHEAST' | 'SOUTHEAST' | 'NORTHWEST' | 'SOUTHWEST' | 'NONE' | null

export type FieldType = 'BURNING' | 'FLOODED' | 'SMOKEY' | 'STEAMY' | 'ELECTRIC_CURRENT' | 'BRIGHT' | 'WINDY' | 'EARTH'

export type Totem = { type: TotemType, direction: Direction, id: string }

export type Tile = {
  totem: Totem
  fields: Array<FieldType>
}

export type Tiles = { [key: string]: Tile }

export type LightBeam = { index: number, direction: Direction }

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

    const newLightBeams = calculateLightBeams(newTiles, dimension)
    const newElectrifiedFields = calculateElectrification({ ...state, tiles: newTilesAfterWaterDispersion})
    console.log('newElectrifiedFields state', newElectrifiedFields)
    return { ...state, tiles: newTilesAfterWaterDispersion, lightBeams: newLightBeams, electrifiedFields: newElectrifiedFields }
  }
  return state;
}



const changeTotemDirection = (state: State, totemIndex: number, direction: Direction): State => {
  const { tiles } = state
  const { totem } = tiles[totemIndex]
  const newTotem = { ...totem, direction }
  const newTiles = { ...tiles, [totemIndex]: { ...tiles[totemIndex], totem: newTotem }}
  const newLightBeams = calculateLightBeams(newTiles, state.dimension)
  const tilesAfterElectrification = electrify({ ...state, tiles: newTiles })
  console.log('newElectrifiedFields change', tilesAfterElectrification)
  return { ...state, tiles: tilesAfterElectrification, lightBeams: newLightBeams }
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
      return changeTotemDirection(state, action.payload.totemIndex, action.payload.direction)
    default:
      return state;
  }
}

export default reducer;