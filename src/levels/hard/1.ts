import type { FieldPower } from '../../logic/getSolutionFromState';
import type { Direction } from '../../redux/reducers';

const Level = {
   number: 11,
   name: 'Nu Yak Village',
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
      '9': null,
      '10': null,
      '11': null,
      '12': null,
      '13': null,
      '14': null,
      '15': 'ELECTRIC_CURRENT' as FieldPower,
      '16': null,
      '17': null,
      '18': null,
      '19': 'ELECTRIC_CURRENT' as FieldPower,
      '20': null,
      '21': null,
      '22': 'ELECTRIC_CURRENT' as FieldPower,
      '23': null,
      '24': null,
      '25': null,
      '26': 'ELECTRIC_CURRENT' as FieldPower,
      '27': 'ELECTRIC_CURRENT' as FieldPower,
      '28': null,
      '29': null,
      '30': null,
      '31': null,
      '32': null,
      '33': 'ELECTRIC_CURRENT' as FieldPower,
      '34': null,
      '35': null,
      '36': 'BURNING' as FieldPower,
      '37': null,
      '38': null,
      '39': null,
      '40': null,
      '41': null,
      '42': null,
      '43': null,
      '44': 'BURNING' as FieldPower,
      '45': null,
      '46': null,
      '47': null,
      '48': null,
    },
    lightBeams: [
      {
        index: 30,
        direction: 'EAST' as Direction,
      },
      {
        index: 30,
        direction: 'EAST' as Direction,
      },
      {
        index: 24,
        direction: 'NORTHEAST' as Direction,
      },
      {
        index: 18,
        direction: 'NORTHEAST' as Direction,
      },
      {
        index: 12,
        direction: 'NORTHEAST' as Direction,
      },
      {
        index: 6,
        direction: 'NORTHEAST' as Direction,
      },
      {
        index: 30,
        direction: 'EAST' as Direction,
      },
    ],
  },
 };

 export default Level;