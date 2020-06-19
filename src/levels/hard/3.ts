import type { FieldPower } from '../../logic/getSolutionFromState';
import type { Direction } from '../../redux/reducers';

const Level = {
   number: 0,
   name: 'Big Huts on the Dunes',
   dimension: 7,
   difficulty: 'HARD',
   solution: {
    tileSolution: {
      '0': null,
      '1': null,
      '2': null,
      '3': null,
      '4': null,
      '5': null,
      '6': 'BURNING' as FieldPower,
      '7': null,
      '8': null,
      '9': null,
      '10': null,
      '11': null,
      '12': null,
      '13': null,
      '14': null,
      '15': 'ELECTRIC_CURRENT' as FieldPower,
      '16': 'ELECTRIC_CURRENT' as FieldPower,
      '17': 'ELECTRIC_CURRENT' as FieldPower,
      '18': 'ELECTRIC_CURRENT' as FieldPower,
      '19': null,
      '20': null,
      '21': 'ELECTRIC_CURRENT' as FieldPower,
      '22': 'ELECTRIC_CURRENT' as FieldPower,
      '23': null,
      '24': null,
      '25': 'ELECTRIC_CURRENT' as FieldPower,
      '26': 'ELECTRIC_CURRENT' as FieldPower,
      '27': 'ELECTRIC_CURRENT' as FieldPower,
      '28': 'ELECTRIC_CURRENT' as FieldPower,
      '29': 'ELECTRIC_CURRENT' as FieldPower,
      '30': null,
      '31': null,
      '32': null,
      '33': 'ELECTRIC_CURRENT' as FieldPower,
      '34': null,
      '35': null,
      '36': 'ELECTRIC_CURRENT' as FieldPower,
      '37': 'ELECTRIC_CURRENT' as FieldPower,
      '38': null,
      '39': 'ELECTRIC_CURRENT' as FieldPower,
      '40': 'ELECTRIC_CURRENT' as FieldPower,
      '41': null,
      '42': null,
      '43': null,
      '44': null,
      '45': null,
      '46': null,
      '47': null,
      '48': null,
    },
    lightBeams: [
      {
        index: 12,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 12,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 18,
        direction: 'SOUTHWEST' as Direction,
      },
      {
        index: 24,
        direction: 'SOUTHWEST' as Direction,
      },
      {
        index: 30,
        direction: 'SOUTHWEST' as Direction,
      },
      {
        index: 36,
        direction: 'SOUTHWEST' as Direction,
      },
      {
        index: 42,
        direction: 'SOUTHWEST' as Direction,
      },
      {
        index: 12,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 20,
        direction: 'SOUTHEAST' as Direction,
      },
      {
        index: 12,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 20,
        direction: 'SOUTHEAST' as Direction,
      },
      {
        index: 27,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 34,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 41,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 48,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 12,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 20,
        direction: 'SOUTHEAST' as Direction,
      },
    ],
  },
 };

 export default Level;