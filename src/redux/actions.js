import actionTypes from './actionTypes'

export const addTotem = ({ totemType, index }) => ({
  type: actionTypes.ADD_TOTEM,
  payload: { totemType, index }
})

export const changeTotemSelection = ({ totemType }) => ({
  type: actionTypes.CHANGE_TOTEM_SELECTION,
  payload: { totemType }
})