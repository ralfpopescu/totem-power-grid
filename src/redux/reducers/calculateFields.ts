import type { State , TotemType} from '.'
import calculatePositionFromIndex from '../../logic/calculatePositionFromIndex'

const applyTotemEffect = (totem: TotemType, index: number, dimension: number) => {
  const { row, column } = calculatePositionFromIndex(index, dimension)
} 

const calculateFields = (state: State) => {
  const { tiles } = state
  const tileIndices = Object.keys(tiles).map(index => parseInt(index))

  const allTotems: Array<{ totem: TotemType, index: number}> = 
  tileIndices.map(tileIndex => ({ totem: tiles[tileIndex].totem, index: tileIndex}))
  .filter(({ totem }) => !!totem)

}