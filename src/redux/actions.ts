import actionTypes from './actionTypes';
import type { TotemType } from '../logic/totemTypes';
import type { Direction } from './reducers';
import type { Level } from '../levels';

export type AddTotemInput = { totemType: TotemType; index: number; startingDirection?: Direction }
export type AddTotem = (input: AddTotemInput ) => void

export const addTotem = ({ totemType, index, startingDirection }: AddTotemInput) => ({
  type: actionTypes.ADD_TOTEM,
  payload: { totemType, index, startingDirection },
});

export type RemoveTotemInput = { index: number }
export type RemoveTotem = (input: RemoveTotemInput ) => void

export const removeTotem = ({ index }: RemoveTotemInput) => ({
  type: actionTypes.REMOVE_TOTEM,
  payload: { index },
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

export type SetLevelInput = { level: Level }
export type SetLevel = (input: SetLevelInput) => void

export const setLevel = ({ level }: SetLevelInput) => ({
  type: actionTypes.SET_LEVEL,
  payload: { level },
});
