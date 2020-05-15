import type { State , TotemType} from '.'
import type { FieldType } from '../../logic/fieldTypes'
import { BURNING, FLOODED } from '../../logic/fieldTypes'
import calculatePositionFromIndex from '../../logic/calculatePositionFromIndex'
import calculateIndexFromPosition from '../../logic/calculateIndexFromPosition'

export const returnAdjacentCoordinates = (index: number, dimension: number) => {
  const { row, column } = calculatePositionFromIndex(index, dimension)

  const northCoordinate = { row: row - 1, column }
  const southCoordinate = { row: row + 1, column }
  const eastCoordinate = { row, column: column + 1}
  const westCoordinate = {row, column: column - 1}

  return [northCoordinate, southCoordinate, eastCoordinate, westCoordinate].filter(coordinate => (
    coordinate.row >= 0 && coordinate.row < dimension && coordinate.column >= 0 && coordinate.column < dimension
  ))
}

const getAllCoordinatesInDirection = () => {}
const getAllCoordinatesInDiagonal = () => {}

const recursivelyGetAdjacentWaterTiles = () => {}

type TotemEffect = { index: number, fieldType: FieldType }

export const applyTotemEffect = (totemType: TotemType, index: number, dimension: number): Array<TotemEffect> => {
  if(totemType === 'FIRE') {
    const coordinates = returnAdjacentCoordinates(index, dimension)
    const fieldApplications = coordinates.map(coordinate => ({
      index: calculateIndexFromPosition({ ...coordinate, dimension }), fieldType: BURNING as FieldType
    }))
    return fieldApplications;
  }
  if(totemType === 'WATER') {
    const coordinates = returnAdjacentCoordinates(index, dimension)
    const fieldApplications = coordinates.map(coordinate => ({
      index: calculateIndexFromPosition({ ...coordinate, dimension }), fieldType: FLOODED as FieldType
    }))
    return fieldApplications;
  }
  return []
} 
