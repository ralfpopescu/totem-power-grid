
type TotemType = 'FIRE' | 'ELECTRIC' | 'LIGHT' | 'WATER' | 'WIND' | 'EARTH'

interface Tile {
  totem: TotemType
}

type Tiles = { [key: string]: Tile }

export type State = {
  tiles: Tiles,
  totemSelection: TotemType
}

export type Action = 
{ type: 'ADD_TOTEM', payload: { index: number, totemType: TotemType }} |
{ type: 'CHANGE_TOTEM_SELECTION', payload: { totemType: TotemType }}

const initialState: State = { tiles: {}, totemSelection: 'FIRE' }

const reducer = (state: State = initialState, action: Action): State => {
  switch(action.type) {
    case 'ADD_TOTEM':
      return {
        ...state,
        tiles: { 
          ...state.tiles, 
          [action.payload.index]: { ...state.tiles[action.payload.index], totem: action.payload.totemType }}
      };
    case 'CHANGE_TOTEM_SELECTION':
      return {
        ...state,
        totemSelection: action.payload.totemType
      };
    default:
      return state;
  }
}

export default reducer;