import type { FieldPower } from '../../logic/getSolutionFromState';
import type { Direction } from '../../redux/reducers';

const Level = {
   number: 0,
   name: 'Dark Jungle Road',
   dimension: 7,
   difficulty: 'HARD',
   solution: {
    tileSolution: {
      '0': null,
      '1': null,
      '2': null,
      '3': 'BURNING' as FieldPower,
      '4': null,
      '5': null,
      '6': null,
      '7': null,
      '8': null,
      '9': null,
      '10': 'BURNING' as FieldPower,
      '11': null,
      '12': null,
      '13': null,
      '14': null,
      '15': null,
      '16': null,
      '17': 'BURNING' as FieldPower,
      '18': null,
      '19': null,
      '20': null,
      '21': null,
      '22': null,
      '23': null,
      '24': 'BURNING' as FieldPower,
      '25': null,
      '26': null,
      '27': null,
      '28': null,
      '29': null,
      '30': null,
      '31': 'BURNING' as FieldPower,
      '32': null,
      '33': null,
      '34': null,
      '35': null,
      '36': null,
      '37': null,
      '38': 'BURNING' as FieldPower,
      '39': null,
      '40': null,
      '41': null,
      '42': null,
      '43': null,
      '44': null,
      '45': 'BURNING' as FieldPower,
      '46': null,
      '47': null,
      '48': null,
    },
    lightBeams: [
      {
        index: 29,
        direction: 'EAST' as Direction,
      },
      {
        index: 29,
        direction: 'EAST' as Direction,
      },
      {
        index: 23,
        direction: 'NORTHEAST' as Direction,
      },
      {
        index: 29,
        direction: 'EAST' as Direction,
      },
      {
        index: 23,
        direction: 'NORTHEAST' as Direction,
      },
      {
        index: 16,
        direction: 'NORTH' as Direction,
      },
      {
        index: 29,
        direction: 'EAST' as Direction,
      },
      {
        index: 23,
        direction: 'NORTHEAST' as Direction,
      },
      {
        index: 24,
        direction: 'EAST' as Direction,
      },
      {
        index: 25,
        direction: 'EAST' as Direction,
      },
      {
        index: 29,
        direction: 'EAST' as Direction,
      },
      {
        index: 37,
        direction: 'SOUTHEAST' as Direction,
      },
      {
        index: 29,
        direction: 'EAST' as Direction,
      },
      {
        index: 37,
        direction: 'SOUTHEAST' as Direction,
      },
      {
        index: 44,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 29,
        direction: 'EAST' as Direction,
      },
      {
        index: 37,
        direction: 'SOUTHEAST' as Direction,
      },
      {
        index: 38,
        direction: 'EAST' as Direction,
      },
      {
        index: 39,
        direction: 'EAST' as Direction,
      },
    ],
  },
 };

 export default Level;