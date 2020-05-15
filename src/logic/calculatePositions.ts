export const calculatePositionFromIndex = (index: number, dimension: number) => {
  const row = Math.floor(index / dimension)
  const column = index % dimension

  return { row, column }
}

type CalculateIndexFromPositionArgs = { row: number, column: number, dimension: number }

export const calculateIndexFromPosition = ({ row, column, dimension }: CalculateIndexFromPositionArgs) => 
row * dimension + column;

