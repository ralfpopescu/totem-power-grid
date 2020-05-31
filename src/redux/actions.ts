import actionTypes from './actionTypes';
import type { TotemType } from '../logic/totemTypes';
import type { Direction } from './reducers';

export type AddTotemInput = { totemType: TotemType; index: number }
export type AddTotem = (input: AddTotemInput ) => void

export const addTotem = ({ totemType, index }: AddTotemInput) => ({
  type: actionTypes.ADD_TOTEM,
  payload: { totemType, index },
});

export type ChangeTotemSelectionInput = { totemType: TotemType }
export type ChangeTotemSelection = (input: ChangeTotemSelectionInput) => void

export const changeTotemSelection = ({ totemType }: ChangeTotemSelectionInput) => ({
  type: actionTypes.CHANGE_TOTEM_SELECTION,
  payload: { totemType },
});


export type ChangeTotemDirectionInput = { totemIndex: number; direction: Direction }
export type ChangeTotemDirection = (input: ChangeTotemDirectionInput) => void

export const changeTotemDirection = ({ totemIndex, direction }: ChangeTotemDirectionInput) => ({
  type: actionTypes.CHANGE_TOTEM_DIRECTION,
  payload: { totemIndex, direction },
});

export type SetHoveredTotemIdInput = { totemId: string | null }
export type SetHoveredTotemId = (input: SetHoveredTotemIdInput) => void

export const setHoveredTotemId = ({ totemId }: SetHoveredTotemIdInput) => ({
  type: actionTypes.SET_HOVERED_TOTEM_ID,
  payload: { totemId },
});
