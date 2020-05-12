import totemTypes from './totemTypes'

const { FIRE, WATER, ELECTRIC, LIGHT, WIND, EARTH } = totemTypes

const totemColor = totemType => {
  switch(totemType) {
    case FIRE:
      return 'red'
    case WATER:
      return 'blue'
    case ELECTRIC:
      return 'yellow' 
    case LIGHT:
      return 'white'
      case WIND:
      return 'grey'
      case EARTH:
      return 'brown'
    default:
      return 'black'
  }
}


export default totemColor