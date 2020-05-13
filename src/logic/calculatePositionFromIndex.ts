const calculatePositionFromIndex = (index: number, dimension: number) => {
  const row = Math.floor(index / dimension)
  const column = index % dimension

  return { row, column }
}

export default calculatePositionFromIndex