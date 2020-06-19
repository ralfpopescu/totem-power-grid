import type { FieldPower } from '../../logic/getSolutionFromState';
import type { Direction } from '../../redux/reducers';

const Level = {
   number: 0,
   name: 'Tipi Rows',
   dimension: 6,
   difficulty: 'MEDIUM',
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
      '10': 'ELECTRIC_CURRENT' as FieldPower,
      '11': null,
      '12': null,
      '13': null,
      '14': null,
      '15': null,
      '16': 'ELECTRIC_CURRENT' as FieldPower,
      '17': 'ELECTRIC_CURRENT' as FieldPower,
      '18': 'BURNING' as FieldPower,
      '19': null,
      '20': null,
      '21': null,
      '22': null,
      '23': 'ELECTRIC_CURRENT' as FieldPower,
      '24': 'BURNING' as FieldPower,
      '25': 'BURNING' as FieldPower,
      '26': null,
      '27': null,
      '28': null,
      '29': 'ELECTRIC_CURRENT' as FieldPower,
      '30': null,
      '31': null,
      '32': null,
      '33': null,
      '34': null,
      '35': null,
    },
    lightBeams: [
      {
        index: 33,
        direction: 'WEST' as Direction,
      },
      {
        index: 33,
        direction: 'WEST' as Direction,
      },
      {
        index: 26,
        direction: 'NORTHWEST' as Direction,
      },
      {
        index: 33,
        direction: 'WEST' as Direction,
      },
      {
        index: 26,
        direction: 'NORTHWEST' as Direction,
      },
      {
        index: 33,
        direction: 'WEST' as Direction,
      },
      {
        index: 26,
        direction: 'NORTHWEST' as Direction,
      },
      {
        index: 25,
        direction: 'WEST' as Direction,
      },
      {
        index: 24,
        direction: 'WEST' as Direction,
      },
      {
        index: 33,
        direction: 'WEST' as Direction,
      },
    ],
  },
 };

 export default Level;