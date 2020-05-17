
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

type Position = { row: number, column: number }

const isAtLimitPosition = (index: number, direction: Direction, dimension: number) => {
  const position = calculatePositionFromIndex(index, dimension)
  console.log('limitposition', position)
  console.log('direction', direction)
  let result;
  switch(direction) {
    case 'EAST':
      result = position.column === dimension - 1;
      break;
    case 'WEST':
      result = position.column === 0;
      break;
    case 'NORTH':
      result = position.row === 0;
      break;
    case 'SOUTH':
      result = position.row === dimension - 1;
      break;
    case 'NORTHEAST':
      result = position.column >= dimension - 1 || position.row <= 0;
      break;
    case 'NORTHWEST':
      result = position.column <= 0 || position.row <= 0;
      break;
    case 'SOUTHEAST':
      result = position.column >= dimension - 1 || position.row >= dimension - 1;
      break;
    case 'SOUTHWEST':
      result = position.column <= 0 || position.row >= dimension - 1;
      break;
  }
  return result;
}

const getNextIndex = (startingIndex: number, direction: Direction, dimension: number): number => {
  let nextIndex;
  let nextPosition;
  const startingPosition = calculatePositionFromIndex(startingIndex, dimension)
  switch(direction) {
    case 'EAST':
      nextPosition = { row: startingPosition.row, column: startingPosition.column + 1 }
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension })
      break;
    case 'WEST':
      nextPosition = { row: startingPosition.row, column: startingPosition.column - 1}
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension })
      break;
    case 'NORTH':
      nextPosition = { row: startingPosition.row - 1, column: startingPosition.column}
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension })
      break;
    case 'SOUTH':
      nextPosition = { row: startingPosition.row + 1, column: startingPosition.column}
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension })
      break;
    case 'NORTHEAST':
      nextPosition = { row: startingPosition.row - 1, column: startingPosition.column + 1}
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension })
      break;
    case 'NORTHWEST':
      nextPosition = { row: startingPosition.row - 1, column: startingPosition.column - 1}
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension })
      break;
    case 'SOUTHEAST':
      nextPosition = { row: startingPosition.row + 1, column: startingPosition.column + 1}
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension })
      break;
    case 'SOUTHWEST':
      nextPosition = { row: startingPosition.row + 1, column: startingPosition.column - 1}
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension })
      break;
    default:
      console.log('no direction: ', direction)
  }
  return nextIndex || 1000;
}

const getRefractionDirections = (direction: Direction): Array<Direction> => {
  let refractionDirections: Array<Direction> = []
  switch(direction) {
    case 'EAST':
      refractionDirections = ['NORTHEAST', 'SOUTHEAST']
      break;
    case 'WEST':
      refractionDirections = ['NORTHWEST', 'SOUTHWEST']
      break;
    case 'NORTH':
      refractionDirections = ['NORTHEAST', 'NORTHWEST']
      break;
    case 'SOUTH':
      refractionDirections = ['SOUTHWEST', 'SOUTHEAST']
      break;
    case 'NORTHEAST':
      refractionDirections = ['NORTH', 'EAST']
      break;
    case 'NORTHWEST':
      refractionDirections = ['NORTH', 'WEST']
      break;
    case 'SOUTHEAST':
      refractionDirections = ['SOUTH', 'EAST']
      break;
    case 'SOUTHWEST':
      refractionDirections = ['SOUTH', 'WEST']
      break;
    default:
      console.log('no direction')
  }
  return refractionDirections
}

const doesTileRefract = (tile: Tile) => tile.fields.includes('FLOODED') && tile.fields.includes('BURNING')
const doesTileBlock = (tile: Tile) => tile.fields.includes('EARTH') && tile.fields.includes('BURNING')

const calculateLightBeams = (
  tiles: Tiles, 
  newLightBeams: Array<LightBeam>, 
  startIndex: number, 
  direction: Direction, 
  dimension: number): Array<LightBeam> => {
    if(isAtLimitPosition(startIndex, direction, dimension)) {
      return newLightBeams;
    }
    console.log(startIndex, direction, dimension)
    const nextIndex = getNextIndex(startIndex, direction, dimension)
    console.log('nextIndex here', nextIndex)
    const nextTile = tiles[nextIndex]

    if(doesTileBlock(nextTile)) {
      return newLightBeams;
    }

    const newLightBeamsWithNext = [...newLightBeams, { index: nextIndex, direction }]

    if(doesTileRefract(nextTile)) {
      console.log('TILE REFRACTS')
      return [...newLightBeamsWithNext, ...getRefractionDirections(direction)
        .map(refractionDirection => calculateLightBeams(tiles, newLightBeamsWithNext, nextIndex, refractionDirection, dimension))
        .reduce((acc, curr) => [...acc, ...curr])]
    }

    return calculateLightBeams(tiles, newLightBeamsWithNext, nextIndex, direction, dimension)
}

const calculateBeamsFromStartingPoint = (
  tiles: Tiles, 
  newLightBeams: Array<LightBeam>, 
  startIndex: number, 
  direction: Direction, 
  dimension: number): Array<LightBeam>=> {
if (direction === 'EAST') {
  const startingPosition = calculatePositionFromIndex(startIndex, dimension)
  if(startingPosition.column === dimension - 1) {
    return newLightBeams;
  }
  const nextPosition = { row: startingPosition.row, column: startingPosition.column + 1}
  const nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension })
  const nextTile = tiles[nextIndex]
  const newLightBeamsWithNext = [...newLightBeams, { index: nextIndex, direction }]

  if(nextTile.fields.includes('FLOODED') && nextTile.fields.includes('BURNING')) {
    return [...newLightBeamsWithNext, 
      ...calculateBeamsFromStartingPoint(tiles, newLightBeamsWithNext, nextIndex, 'NORTHEAST', dimension),
      ...calculateBeamsFromStartingPoint(tiles, newLightBeamsWithNext, nextIndex, 'SOUTHEAST', dimension)]
  } else if(nextTile.fields.includes('EARTH') && nextTile.fields.includes('BURNING')) {
    return newLightBeams
  }
  return calculateBeamsFromStartingPoint(tiles, newLightBeamsWithNext, nextIndex, 'EAST', dimension)

} else if (direction === 'WEST') {
  const startingPosition = calculatePositionFromIndex(startIndex, dimension)
  if(startingPosition.column === 0) {
    return newLightBeams;
  }
  const nextPosition = { row: startingPosition.row, column: startingPosition.column - 1}
  const nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension })
  const nextTile = tiles[nextIndex]
  const newLightBeamsWithNext = [...newLightBeams, { index: nextIndex, direction }]

  if(nextTile.fields.includes('FLOODED') && nextTile.fields.includes('BURNING')) {
    return [...newLightBeamsWithNext, 
      ...calculateBeamsFromStartingPoint(tiles, newLightBeamsWithNext, nextIndex, 'NORTHWEST', dimension),
      ...calculateBeamsFromStartingPoint(tiles, newLightBeamsWithNext, nextIndex, 'SOUTHWEST', dimension)]
  } else if(nextTile.fields.includes('EARTH') && nextTile.fields.includes('BURNING')) {
    return newLightBeams
  }
  return calculateBeamsFromStartingPoint(tiles, newLightBeamsWithNext, nextIndex, 'WEST', dimension)

} else if (direction === 'NORTH') {
  return newLightBeams;

} else if (direction === 'SOUTH') {
  return newLightBeams;

} else if (direction === 'NORTHEAST') {
  return newLightBeams;

} else if (direction === 'NORTHWEST') {
  return newLightBeams;

} else if (direction === 'SOUTHEAST') {
  return newLightBeams;

} else if (direction === 'SOUTHWEST') {
  return newLightBeams;

} else {
  return newLightBeams;
}
}

const caclulateNewLightBeams = (tiles: Tiles, dimension: number) => {
  const lightTotems = Object.keys(tiles)
    .map(index => ({ totem: tiles[index].totem, index }))
    .filter(item => item.totem?.type === 'LIGHT')

  const beamsPerLightTotem = lightTotems.map(lightTotem => 
    calculateLightBeams(tiles, [], parseInt(lightTotem.index), lightTotem.totem.direction, dimension)
    )
  return beamsPerLightTotem.reduce((acc, curr) => ([ ...acc, ...curr ]), [])
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

    const newLightBeams = caclulateNewLightBeams(newTiles, dimension)
    return { ...state, tiles: newTilesAfterWaterDispersion, lightBeams: newLightBeams }
  }

  return state;
}


const changeTotemDirection = (state: State, totemIndex: number, direction: Direction): State => {
  const { tiles } = state
  const { totem } = tiles[totemIndex]
  const newTotem = { ...totem, direction }
  const newTiles = { ...tiles, [totemIndex]: { ...tiles[totemIndex], totem: newTotem }}
  const newLightBeams = caclulateNewLightBeams(newTiles, state.dimension)
  console.log('newLightBeams', newLightBeams)
  return { ...state, tiles: newTiles, lightBeams: newLightBeams }
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