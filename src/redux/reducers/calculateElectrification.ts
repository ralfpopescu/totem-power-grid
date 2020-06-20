import calculatePositionFromIndex from '../../logic/calculatePositionFromIndex';
import { returnAdjacentCoordinates } from './calculateFields';
import calculateIndexFromPosition from '../../logic/calculateIndexFromPosition';
import type { Direction, Field, FieldType, State, Tiles, Totem } from '.';

const moveOneUnitInDirection = (index: number, dimension: number, direction: Direction): number | null => {
  const { row, column } = calculatePositionFromIndex(index, dimension);
  let nextPosition;
  switch(direction) {
    case 'EAST':
      nextPosition = { row, column: column + 1 };
      if (nextPosition.column >= dimension) nextPosition = null;
      break;
    case 'WEST':
      nextPosition = { row, column: column - 1 };
      if (nextPosition.column < 0) nextPosition = null;
      break;
    case 'NORTH':
      nextPosition = { row: row - 1, column };
      if (nextPosition.row < 0) nextPosition = null;
      break;
    case 'SOUTH':
      nextPosition = { row: row + 1, column };
      if (nextPosition.row >= dimension) nextPosition = null;
      break;
    default:
      console.log('no direction');
  }
    if(!nextPosition) {
      return null;
    }
    return calculateIndexFromPosition({ ...nextPosition, dimension });
  };

type ElectricTotem = { index: number; totem: Totem }

type ElectrifiedTile = { index: number; appliedBy: string }

type ElectrifiedFieldMap = { [key: string]: Array<string> }


const getElectricTotems = (tiles: Tiles): Array<ElectricTotem> =>{

 const flattened = Object.keys(tiles)
  .map(index => ({ totem: tiles[index].totem, index: parseInt(index, 10) }));

  const filteredNulls: Array<ElectricTotem> = 
  flattened.filter((item) => item.totem != null) as Array<ElectricTotem>;

  return filteredNulls.filter(item => item.totem?.type === 'ELECTRIC');

};

// merges 2 electric field maps together
const mergeElectricFieldMaps = (map1: ElectrifiedFieldMap, map2: ElectrifiedFieldMap): ElectrifiedFieldMap => {
  const newMap: ElectrifiedFieldMap = { ...map1 };
  const map2Indices = Object.keys(map2);
  map2Indices.forEach(index => {
    if(newMap[index]) {
      const merged = [...newMap[index], ...map2[index]];
      newMap[index] = [...Array.from(new Set(merged))];
    } else {
      newMap[index] = map2[index];
    }
  });
  return newMap;
};

const canElectrifyTile = (
  fields: Array<Field>, 
  electrifiedFields: ElectrifiedFieldMap, 
  index: number, 
  totem: Totem | null, 
  applyingTotemId: string) => 
  fields.map(f => f.type).includes('FLOODED') 
  && !fields.map(f => f.type).includes('EARTH') 
  && (electrifiedFields[index] && !electrifiedFields[index].includes(applyingTotemId) || !electrifiedFields[index])
  && !totem;

const electrifyNeighbors = (
  startIndex: number,
   state: State, 
   startingElectricFields: ElectrifiedFieldMap, 
   totemId: string): ElectrifiedFieldMap => {
  const { dimension, tiles } = state;

  const adjacentCoordinates = returnAdjacentCoordinates(startIndex, dimension);
  console.log('adjacentCoordinates', adjacentCoordinates);
  const adjacentIndices = adjacentCoordinates.map(coordinate => calculateIndexFromPosition({ ...coordinate, dimension }));
  console.log('adjacentIndices', adjacentIndices);
  const adjacentFields = adjacentIndices.map(index => ({ fields: tiles[index].fields, index, totem:  tiles[index].totem}));


  // find neighbors that can conduct electricity
  const fieldsThatCanBeElectrified = adjacentFields
  .filter(({ fields, index, totem }) => canElectrifyTile(fields, startingElectricFields, index, totem, totemId));

  if(fieldsThatCanBeElectrified.length === 0) {
    return startingElectricFields;
  }

  const indicesThatCanBeElectrified = fieldsThatCanBeElectrified.map(({ index }) => index);

  const newElectrifiedFields = { ...startingElectricFields };

  // for each tile index that can be electrified, 
  // add the totem id that is applying the electricity to the map
 indicesThatCanBeElectrified.forEach(index => {
    const oldFields = newElectrifiedFields[index] || [];
    newElectrifiedFields[index] = [...oldFields, totemId ];
  });

  // recursively solve for each of the tiles their 
  const mergedMaps: ElectrifiedFieldMap = indicesThatCanBeElectrified
  .map(index => electrifyNeighbors(index, state, newElectrifiedFields, totemId))
  .reduce((acc, curr) => mergeElectricFieldMaps(acc, curr));

  return mergedMaps;
};


export const electrifyTiles = (tiles: Tiles, electrifiedFields: ElectrifiedFieldMap) => {
  const newTiles = { ...tiles };
  const tileIndices = Object.keys(tiles);
  const removeElectricityFromTiles: Tiles = tileIndices.map(index => {
    const { fields } = newTiles[index];
    const removedElectricity = fields.filter(field => field.type !== 'ELECTRIC_CURRENT');
    return { index, fields: removedElectricity };
  }).reduce((acc: Tiles, curr): Tiles => {
    acc[curr.index] = { ...newTiles[curr.index], fields: curr.fields};
    return acc;
  }, {});
  const returnTiles = { ...removeElectricityFromTiles };
  const electriedFieldIndices = Object.keys(electrifiedFields);
  electriedFieldIndices.forEach(index => {
    const appliedBys = electrifiedFields[index];
    const newApplications = appliedBys.map(totemId => ({ appliedBy: totemId, type: 'ELECTRIC_CURRENT' } as Field));
    returnTiles[index] = { ...returnTiles[index], fields: [...returnTiles[index].fields, ...newApplications]};
  });
  return returnTiles;
};

const calculateElectrification = (state: State): ElectrifiedFieldMap => {
  const { tiles, dimension } = state;
  const electricTotems = getElectricTotems(tiles);

  if(electricTotems.length === 0) {
    return {};
  }

  const newElectrifiedFieldMap: ElectrifiedFieldMap = electricTotems.map(electricTotem => {
    const { totem, index } = electricTotem;
    const totemId = totem.id;
    const { direction } = totem;
    const startIndex = moveOneUnitInDirection(index, dimension, direction);

    if(!startIndex) {
      return {};
    }

    const initialElectrifiedFields = { [startIndex]: [totemId] };

    // is the first tile even electrifiable?
    if(!canElectrifyTile(tiles[startIndex].fields, {}, startIndex, tiles[startIndex].totem, totemId) || 
    tiles[startIndex].fields.length === 0) {
      return initialElectrifiedFields;
    }

    return electrifyNeighbors(startIndex, state, initialElectrifiedFields, totemId);
  }).reduce((acc, curr) => mergeElectricFieldMaps(acc, curr));

console.log('newElectrifiedFieldMap', newElectrifiedFieldMap);
return newElectrifiedFieldMap;
};

const electrify = (state: State): Tiles => {
  const newElectrifiedFields = calculateElectrification(state);
  const newTiles = electrifyTiles(state.tiles, newElectrifiedFields);
  return newTiles;
};

export default electrify;