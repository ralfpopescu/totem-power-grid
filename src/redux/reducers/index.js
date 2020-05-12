
const initialState = { totems: [], tiles: {}, totemSelection: 'FIRE' }

const reducer = (state = initialState, action) => {
  console.log('reducer', state, action);

  switch(action.type) {
    case 'ADD_TOTEM':
      return {
        ...state,
        totems: [...state.totems, action.payload],
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