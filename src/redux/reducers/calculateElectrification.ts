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


const getElectricTotems = (tiles: Tiles): Array<ElectricTotem> =>{

 const flattened = Object.keys(tiles)
  .map(index => ({ totem: tiles[index].totem, index: parseInt(index, 10) }));

  const filteredNulls: Array<ElectricTotem> = 
  flattened.filter((item) => item.totem != null) as Array<ElectricTotem>;

  return filteredNulls.filter(item => item.totem?.type === 'ELECTRIC');

};



const canElectrifyTile = (fields: Array<Field>, electrifiedFields: Array<number>, index: number, totem: Totem | null) => 
  fields.map(f => f.type).includes('FLOODED') 
  && !fields.map(f => f.type).includes('EARTH') 
  && !electrifiedFields.includes(index)
  && !totem;

const electrifyNeighbors = (
  startIndex: number,
   state: State, 
   startingElectricFields: Array<number>, 
   totemId: string): Array<ElectrifiedTile> => {
  const { dimension, tiles } = state;

  const adjacentCoordinates = returnAdjacentCoordinates(startIndex, dimension);
  console.log('adjacentCoordinates', adjacentCoordinates);
  const adjacentIndices = adjacentCoordinates.map(coordinate => calculateIndexFromPosition({ ...coordinate, dimension }));
  console.log('adjacentIndices', adjacentIndices);
  const adjacentFields = adjacentIndices.map(index => ({ fields: tiles[index].fields, index, totem:  tiles[index].totem}));

  const fieldsWithWaterAndNoElectrification = adjacentFields
  .filter(({ fields, index, totem }) => canElectrifyTile(fields, startingElectricFields, index, totem));

  if(fieldsWithWaterAndNoElectrification.length === 0) {
    const startingElectricFieldsWithTotemId = startingElectricFields.map(index => ({ index, appliedBy: totemId }));
    return startingElectricFieldsWithTotemId;
  }

  const indicesWithWaterAndNoElectrification = fieldsWithWaterAndNoElectrification.map(({ index }) => index);

  const addedElectrifiedFields = [...startingElectricFields, ...indicesWithWaterAndNoElectrification];

  return [...addedElectrifiedFields, ...indicesWithWaterAndNoElectrification]
    .map(index => electrifyNeighbors(index, state, addedElectrifiedFields, totemId ))
    .reduce((acc, curr) => [...acc, ...curr]);
};


export const electrifyTiles = (tiles: Tiles, electrifiedFields: Array<ElectrifiedTile>) => {
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
  console.log(removeElectricityFromTiles);
  const returnTiles = { ...removeElectricityFromTiles };
  electrifiedFields.forEach(electrifiedTile => {
    returnTiles[electrifiedTile.index] = { ...newTiles[electrifiedTile.index], 
      fields: [...newTiles[electrifiedTile.index].fields, 
      { type: 'ELECTRIC_CURRENT', appliedBy: electrifiedTile.appliedBy }]};
  });
  return returnTiles;
};

const calculateElectrification = (state: State): Array<ElectrifiedTile> => {
  const { tiles, dimension } = state;
  const electricTotems = getElectricTotems(tiles);

  if(electricTotems.length === 0) {
    return [];
  }

  const newElectrifiedIndices = electricTotems.map(electricTotem => {
    const { totem, index } = electricTotem;
    const totemId = totem.id;
    const { direction } = totem;
    const startIndex = moveOneUnitInDirection(index, dimension, direction);
    console.log('startIndex', startIndex);

    if(!startIndex) {
      return [];
    }

    const initialElectrifiedFields = [startIndex];

    if(!canElectrifyTile(tiles[startIndex].fields, [], startIndex, tiles[startIndex].totem)|| 
    tiles[startIndex].fields.length === 0) {
      return initialElectrifiedFields.map(index => ({ index, appliedBy: totemId }));
    }

    return electrifyNeighbors(startIndex, state, initialElectrifiedFields, totemId);
  }).reduce((acc, curr) => [...acc, ...curr]);

console.log('newElectrifiedIndices', newElectrifiedIndices);
return newElectrifiedIndices;
};

const electrify = (state: State): Tiles => {
  const newElectrifiedFields = calculateElectrification(state);
  const newTiles = electrifyTiles(state.tiles, newElectrifiedFields);
  return newTiles;
};

export default electrify;