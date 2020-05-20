import calculatePositionFromIndex from '../../logic/calculatePositionFromIndex'
import { returnAdjacentCoordinates } from './calculateFields'
import calculateIndexFromPosition from '../../logic/calculateIndexFromPosition'
import type { Direction, FieldType, State, Tiles, Totem } from '.'

const moveOneUnitInDirection = (index: number, dimension: number, direction: Direction): number | null => {
  const { row, column } = calculatePositionFromIndex(index, dimension)
  let nextPosition;
  console.log('direction', direction)
  switch(direction) {
    case 'EAST':
      nextPosition = { row, column: column + 1 }
      if (nextPosition.column === dimension) nextPosition = null;
      break;
    case 'WEST':
      nextPosition = { row, column: column - 1 }
      if (nextPosition.column === 0) nextPosition = null;
      break;
    case 'NORTH':
      nextPosition = { row: row - 1, column }
      if (nextPosition.column === 0) nextPosition = null;
      break;
    case 'SOUTH':
      nextPosition = { row: row + 1, column }
      if (nextPosition.column === dimension) nextPosition = null;
      break;
  }
    if(!nextPosition) {
      return null;
    }
    return calculateIndexFromPosition({ ...nextPosition, dimension });
  }

type ElectricTotem = { index: number, totem: Totem }

const getElectricTotems = (tiles: Tiles): Array<ElectricTotem> => Object.keys(tiles)
  .map(index => ({ totem: tiles[index].totem, index: parseInt(index) }))
  .filter(item => item.totem?.type === 'ELECTRIC')



const canElectrifyTile = (fields: Array<FieldType>, electrifiedFields: Array<number>, index: number) => 
  fields.includes('FLOODED') && !fields.includes('EARTH') && !electrifiedFields.includes(index)

const electrifyNeighbors = (startIndex: number, state: State, startingElectricFields: Array<number>): Array<number> => {
  const { dimension, tiles } = state

  const adjacentCoordinates = returnAdjacentCoordinates(startIndex, dimension)
  const adjacentIndices = adjacentCoordinates.map(coordinate => calculateIndexFromPosition({ ...coordinate, dimension }))
  const adjacentFields = adjacentIndices.map(index => ({ fields: tiles[index].fields, index }))

  const fieldsWithWaterAndNoElectrification = adjacentFields
  .filter(({ fields, index }) => canElectrifyTile(fields, startingElectricFields, index))

  if(fieldsWithWaterAndNoElectrification.length === 0) {
    return startingElectricFields;
  }

  const indicesWithWaterAndNoElectrification = fieldsWithWaterAndNoElectrification.map(({ index }) => index)

  const addedElectrifiedFields = [...startingElectricFields, ...indicesWithWaterAndNoElectrification]

  return [...addedElectrifiedFields, ...indicesWithWaterAndNoElectrification
    .map(index => electrifyNeighbors(index, state, addedElectrifiedFields))
    .reduce((acc, curr) => [...acc, ...curr]) ]
}

export const electrifyTiles = (tiles: Tiles, electrifiedFields: Array<number>) => {
  const newTiles = { ...tiles }
  const tileIndices = Object.keys(tiles)
  const removeElectricityFromTiles: Tiles = tileIndices.map(index => {
    const { fields } = newTiles[index]
    const removedElectricity = fields.filter(field => field !== 'ELECTRIC_CURRENT')
    return { index, fields: removedElectricity }
  }).reduce((acc: Tiles, curr): Tiles => {
    acc[curr.index] = { ...newTiles[curr.index], fields: curr.fields}
    return acc
  }, {})
  
  const returnTiles = { ...removeElectricityFromTiles }
  electrifiedFields.forEach(index => {
    returnTiles[index] = { ...newTiles[index], fields: [...newTiles[index].fields, 'ELECTRIC_CURRENT']}
  })
  return returnTiles
}

const calculateElectrification = (state: State): Array<number> => {
  const { tiles, dimension } = state
  const electricTotems = getElectricTotems(tiles)

  if(electricTotems.length === 0) {
    return []
  }

  const newElectrifiedIndices = electricTotems.map(electricTotem => {
    const { totem, index } = electricTotem
    const { direction } = totem
    const startIndex = moveOneUnitInDirection(index, dimension, direction)

    if(!startIndex) {
      return []
    }

    if(canElectrifyTile(tiles[startIndex].fields, [], startIndex) || 
    tiles[startIndex].fields.length === 0) {
      const initialElectrifiedFields = [startIndex]
      return electrifyNeighbors(startIndex, state, initialElectrifiedFields)
    }
    return []
  }).reduce((acc, curr) => [...acc, ...curr])

console.log('newElectrifiedIndices', newElectrifiedIndices)
return newElectrifiedIndices
}

const electrify = (state: State): Tiles => {
  const newElectrifiedIndices = calculateElectrification(state)
  const newTiles = electrifyTiles(state.tiles, newElectrifiedIndices)
  return newTiles
}

export default electrify