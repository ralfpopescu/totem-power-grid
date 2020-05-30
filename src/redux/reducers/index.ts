
import { v4 as uuidv4 } from 'uuid';
import { applyTotemEffect } from './calculateFields';
import calculateLightBeams from './calculateLightBeams';
import doEarthWaterDispersion from './doEarthWaterDispersion';
import electrify from './calculateElectrification';
import getSolutionFromState from '../../logic/getSolutionFromState';

export type TotemType = 'FIRE' | 'ELECTRIC' | 'LIGHT' | 'WATER' | 'WIND' | 'EARTH'

export type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST' | 'NORTHEAST' | 'SOUTHEAST' | 'NORTHWEST' | 'SOUTHWEST' | 'NONE' | null

export type FieldType = 'BURNING' | 'FLOODED' | 'SMOKEY' | 'STEAMY' | 'ELECTRIC_CURRENT' | 'BRIGHT' | 'WINDY' | 'EARTH'

export type Field = { type: FieldType; appliedBy: string }

export type Totem = { type: TotemType; direction: Direction; id: string }

export type Tile = {
  totem: Totem;
  fields: Array<Field>;
}

export type Tiles = { [key: string]: Tile }

export type LightBeam = { index: number; direction: Direction }

export type State = {
  tiles: Tiles;
  lightBeams: Array<LightBeam>;
  totemSelection: TotemType;
  dimension: number;
}

const initialDimension = 8;

const initialTile = { totem: null, fields: [] };
const initialIndices = Array(initialDimension * initialDimension).fill(1).map((_, index) => index);
const initialTiles = initialIndices.reduce((acc, curr) => ({ ...acc, [curr]: { ...initialTile }}), {});

export type Action = 
{ type: 'ADD_TOTEM'; payload: { index: number; totemType: TotemType }} |
{ type: 'CHANGE_TOTEM_SELECTION'; payload: { totemType: TotemType }} |
{ type: 'CHANGE_TOTEM_DIRECTION'; payload: { totemIndex: number; direction: Direction };
}

const initialState: State = { 
  tiles: initialTiles, 
  lightBeams: [], 
  totemSelection: 'FIRE', 
  dimension: initialDimension };

const canTotemBeInField = (totemType: TotemType, fields: Array<Field>) => fields.length === 0 ||
  (totemType === 'FIRE' && fields[0].type === 'BURNING' && fields.length === 1);

const getInitialDirectionFromTotemType = (totemType: TotemType): Direction => {
  if(totemType === 'LIGHT' || totemType === 'ELECTRIC') {
    return 'SOUTH';
  }
  return null;
};

const addTotemToBoard = (state: State, totemType: TotemType, index: number): State => {
  const { tiles, dimension } = state;
  const tile = tiles[index] || { totem: null, fields: [] };
  const newTiles: Tiles = { ...state.tiles };

  if(tile.totem) {
    return state;
  }
  if(canTotemBeInField(totemType, tile.fields)) {
    const id =  uuidv4();
    const totemEffects = applyTotemEffect(totemType, index, dimension);

    totemEffects.forEach((totemEffect) => {
      const effectIndex = totemEffect.index;
      const { fieldType } = totemEffect;

      const tileStateAtIndex = state.tiles[effectIndex] || { totem: null, fields: [] };
      const { fields } = tileStateAtIndex;
      if(!fields.map(f => f.type).includes(fieldType)) {
        newTiles[`${effectIndex}`] = { ...tileStateAtIndex, fields: [...fields, {type: fieldType, appliedBy: id} ]};
      }
    });
    newTiles[index] = { ...newTiles[index], totem: { type: totemType, direction: getInitialDirectionFromTotemType(totemType), id } };
    const tilesAfterWaterDispersion = doEarthWaterDispersion(newTiles, dimension);

    const newLightBeams = calculateLightBeams(newTiles, dimension);
    const tilesAfterElectrification = electrify({ ...state, tiles: tilesAfterWaterDispersion});
    return { ...state, tiles: tilesAfterElectrification, lightBeams: newLightBeams };
  }
  return state;
};



const changeTotemDirection = (state: State, totemIndex: number, direction: Direction): State => {
  const { tiles } = state;
  const { totem } = tiles[totemIndex];
  const newTotem = { ...totem, direction };
  const newTiles = { ...tiles, [totemIndex]: { ...tiles[totemIndex], totem: newTotem }};
  const newLightBeams = calculateLightBeams(newTiles, state.dimension);
  const tilesAfterElectrification = electrify({ ...state, tiles: newTiles });
  return { ...state, tiles: tilesAfterElectrification, lightBeams: newLightBeams };
};

const reducer = (state: State = initialState, action: Action): State => {
  switch(action.type) {
    case 'ADD_TOTEM':
      return addTotemToBoard(state, action.payload.totemType, action.payload.index);
    case 'CHANGE_TOTEM_SELECTION':
      return {
        ...state,
        totemSelection: action.payload.totemType,
      };
    case 'CHANGE_TOTEM_DIRECTION':
      return changeTotemDirection(state, action.payload.totemIndex, action.payload.direction);
    default:
      return state;
  }
};

export default reducer;