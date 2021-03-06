import type { FieldPower } from '../../logic/getSolutionFromState';
import type { Direction } from '../../redux/reducers';

const Level = {
   number: 12,
   name: 'Thunder Mountain Camp',
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
      '6': null,
      '7': null,
      '8': null,
      '9': 'ELECTRIC_CURRENT' as FieldPower,
      '10': null,
      '11': null,
      '12': null,
      '13': null,
      '14': null,
      '15': 'ELECTRIC_CURRENT' as FieldPower,
      '16': null,
      '17': 'ELECTRIC_CURRENT' as FieldPower,
      '18': null,
      '19': null,
      '20': null,
      '21': null,
      '22': null,
      '23': 'ELECTRIC_CURRENT' as FieldPower,
      '24': null,
      '25': null,
      '26': null,
      '27': null,
      '28': null,
      '29': null,
      '30': null,
      '31': null,
      '32': null,
      '33': 'BURNING' as FieldPower,
      '34': null,
      '35': null,
      '36': null,
      '37': null,
      '38': null,
      '39': null,
      '40': null,
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
        index: 31,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 31,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 37,
        direction: 'SOUTHWEST' as Direction,
      },
      {
        index: 43,
        direction: 'SOUTHWEST' as Direction,
      },
      {
        index: 31,
        direction: 'SOUTH' as Direction,
      },
    ],
  },
 };

 export default Level;