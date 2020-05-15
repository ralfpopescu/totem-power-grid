type CalculateIndexFromPositionArgs = { row: number, column: number, dimension: number }

const calculateIndexFromPosition = ({ row, column, dimension }: CalculateIndexFromPositionArgs) => 
row * dimension + column;

export default calculateIndexFromPosition