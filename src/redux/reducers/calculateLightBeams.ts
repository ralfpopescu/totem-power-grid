import type { Direction, LightBeam, Tiles, Tile } from '.';
import calculatePositionFromIndex from '../../logic/calculatePositionFromIndex';
import calculateIndexFromPosition from '../../logic/calculateIndexFromPosition';

const isAtLimitPosition = (index: number, direction: Direction, dimension: number) => {
  const position = calculatePositionFromIndex(index, dimension);
  let result;
  switch(direction) {
    case 'EAST':
      result = position.column === dimension - 1;
      break;
    case 'WEST':
      result = position.column === 0;
      break;
    case 'NORTH':
      result = position.row === 0;
      break;
    case 'SOUTH':
      result = position.row === dimension - 1;
      break;
    case 'NORTHEAST':
      result = position.column >= dimension - 1 || position.row <= 0;
      break;
    case 'NORTHWEST':
      result = position.column <= 0 || position.row <= 0;
      break;
    case 'SOUTHEAST':
      result = position.column >= dimension - 1 || position.row >= dimension - 1;
      break;
    case 'SOUTHWEST':
      result = position.column <= 0 || position.row >= dimension - 1;
      break;
  }
  return result;
};

const getNextIndex = (startingIndex: number, direction: Direction, dimension: number): number => {
  let nextIndex;
  let nextPosition;
  const startingPosition = calculatePositionFromIndex(startingIndex, dimension);
  switch(direction) {
    case 'EAST':
      nextPosition = { row: startingPosition.row, column: startingPosition.column + 1 };
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension });
      break;
    case 'WEST':
      nextPosition = { row: startingPosition.row, column: startingPosition.column - 1};
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension });
      break;
    case 'NORTH':
      nextPosition = { row: startingPosition.row - 1, column: startingPosition.column};
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension });
      break;
    case 'SOUTH':
      nextPosition = { row: startingPosition.row + 1, column: startingPosition.column};
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension });
      break;
    case 'NORTHEAST':
      nextPosition = { row: startingPosition.row - 1, column: startingPosition.column + 1};
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension });
      break;
    case 'NORTHWEST':
      nextPosition = { row: startingPosition.row - 1, column: startingPosition.column - 1};
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension });
      break;
    case 'SOUTHEAST':
      nextPosition = { row: startingPosition.row + 1, column: startingPosition.column + 1};
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension });
      break;
    case 'SOUTHWEST':
      nextPosition = { row: startingPosition.row + 1, column: startingPosition.column - 1};
      nextIndex = calculateIndexFromPosition({ ...nextPosition, dimension });
      break;
    default:
      console.log('no direction: ', direction);
  }
  return nextIndex || 1000;
};

const getRefractionDirections = (direction: Direction): Array<Direction> => {
  let refractionDirections: Array<Direction> = [];
  switch(direction) {
    case 'EAST':
      refractionDirections = ['NORTHEAST', 'SOUTHEAST'];
      break;
    case 'WEST':
      refractionDirections = ['NORTHWEST', 'SOUTHWEST'];
      break;
    case 'NORTH':
      refractionDirections = ['NORTHEAST', 'NORTHWEST'];
      break;
    case 'SOUTH':
      refractionDirections = ['SOUTHWEST', 'SOUTHEAST'];
      break;
    case 'NORTHEAST':
      refractionDirections = ['NORTH', 'EAST'];
      break;
    case 'NORTHWEST':
      refractionDirections = ['NORTH', 'WEST'];
      break;
    case 'SOUTHEAST':
      refractionDirections = ['SOUTH', 'EAST'];
      break;
    case 'SOUTHWEST':
      refractionDirections = ['SOUTH', 'WEST'];
      break;
    default:
      console.log('no direction');
  }
  return refractionDirections;
};

const doesTileRefract = (tile: Tile) => tile.fields.includes('FLOODED') && tile.fields.includes('BURNING');
const doesTileBlock = (tile: Tile) => tile.fields.includes('EARTH') && tile.fields.includes('BURNING');

const calculateLightBeams = (
  tiles: Tiles, 
  newLightBeams: Array<LightBeam>, 
  startIndex: number, 
  direction: Direction, 
  dimension: number): Array<LightBeam> => {
    if(isAtLimitPosition(startIndex, direction, dimension)) {
      return newLightBeams;
    }
    const nextIndex = getNextIndex(startIndex, direction, dimension);
    const nextTile = tiles[nextIndex];

    if(doesTileBlock(nextTile)) {
      return newLightBeams;
    }

    const newLightBeamsWithNext = [...newLightBeams, { index: nextIndex, direction }];

    if(doesTileRefract(nextTile)) {
      return [...newLightBeamsWithNext, ...getRefractionDirections(direction)
        .map(refractionDirection => calculateLightBeams(tiles, newLightBeamsWithNext, nextIndex, refractionDirection, dimension))
        .reduce((acc, curr) => [...acc, ...curr])];
    }

    return calculateLightBeams(tiles, newLightBeamsWithNext, nextIndex, direction, dimension);
};

const calculateAllBeams = (tiles: Tiles, dimension: number) => {
  const lightTotems = Object.keys(tiles)
    .map(index => ({ totem: tiles[index].totem, index }))
    .filter(item => item.totem?.type === 'LIGHT');

  const beamsPerLightTotem = lightTotems.map(lightTotem => 
    calculateLightBeams(tiles, [], parseInt(lightTotem.index), lightTotem.totem.direction, dimension)
    );
  return beamsPerLightTotem.reduce((acc, curr) => ([ ...acc, ...curr ]), []);
};

export default calculateAllBeams;