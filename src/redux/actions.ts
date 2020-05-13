import actionTypes from './actionTypes'
import type { TotemType } from '../logic/totemTypes'

export type AddTotemInput = { totemType: TotemType, index: number }

export const addTotem = ({ totemType, index }: AddTotemInput) => ({
  type: actionTypes.ADD_TOTEM,
  payload: { totemType, index }
})

export type ChangeTotemSelectionInput = { totemType: TotemType }
export type ChangeTotemSelection = (input: ChangeTotemSelectionInput) => void

export const changeTotemSelection = ({ totemType }: ChangeTotemSelectionInput) => ({
  type: actionTypes.CHANGE_TOTEM_SELECTION,
  payload: { totemType }
})