import type { FieldPower } from '../../logic/getSolutionFromState';
import type { Direction } from '../../redux/reducers';

const Level = {
   number: 9,
   name: 'Baba Bay',
   dimension: 6,
   difficulty: 'MEDIUM',
   solution: {
    tileSolution: {
      '0': null,
      '1': null,
      '2': null,
      '3': 'ELECTRIC_CURRENT' as FieldPower,
      '4': null,
      '5': null,
      '6': 'BURNING' as FieldPower,
      '7': null,
      '8': null,
      '9': 'ELECTRIC_CURRENT' as FieldPower,
      '10': 'ELECTRIC_CURRENT' as FieldPower,
      '11': null,
      '12': null,
      '13': null,
      '14': 'ELECTRIC_CURRENT' as FieldPower,
      '15': null,
      '16': null,
      '17': null,
      '18': null,
      '19': null,
      '20': null,
      '21': null,
      '22': null,
      '23': null,
      '24': null,
      '25': 'ELECTRIC_CURRENT' as FieldPower,
      '26': 'ELECTRIC_CURRENT' as FieldPower,
      '27': null,
      '28': null,
      '29': null,
      '30': null,
      '31': null,
      '32': null,
      '33': null,
      '34': null,
      '35': 'BURNING' as FieldPower,
    },
    lightBeams: [
      {
        index: 1,
        direction: 'EAST' as Direction,
      },
      {
        index: 1,
        direction: 'EAST' as Direction,
      },
      {
        index: 1,
        direction: 'EAST' as Direction,
      },
      {
        index: 8,
        direction: 'SOUTHEAST' as Direction,
      },
      {
        index: 1,
        direction: 'EAST' as Direction,
      },
      {
        index: 8,
        direction: 'SOUTHEAST' as Direction,
      },
      {
        index: 14,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 20,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 26,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 32,
        direction: 'SOUTH' as Direction,
      },
      {
        index: 1,
        direction: 'EAST' as Direction,
      },
      {
        index: 8,
        direction: 'SOUTHEAST' as Direction,
      },
      {
        index: 9,
        direction: 'EAST' as Direction,
      },
      {
        index: 10,
        direction: 'EAST' as Direction,
      },
      {
        index: 11,
        direction: 'EAST' as Direction,
      },
    ],
  },
 };

 export default Level;