import type { FieldPower } from '../logic/getSolutionFromState';
import type { Direction } from '../redux/reducers';

const Level = {
   number: 0,
   name: 'Fisherman’s Dream',
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
       '10': null,
       '11': null,
       '12': null,
       '13': 'BURNING' as FieldPower,
       '14': null,
       '15': null,
       '16': 'ELECTRIC_CURRENT' as FieldPower,
       '17': 'ELECTRIC_CURRENT' as FieldPower,
       '18': 'BURNING' as FieldPower,
       '19': null,
       '20': null,
       '21': null,
       '22': 'ELECTRIC_CURRENT' as FieldPower,
       '23': null,
       '24': null,
       '25': null,
       '26': null,
       '27': null,
       '28': null,
       '29': null,
       '30': 'BURNING' as FieldPower,
       '31': null,
       '32': null,
       '33': null,
       '34': null,
       '35': null,
     },
     lightBeams: [
       {
         index: 7,
         direction: 'EAST' as Direction,
       },
       {
         index: 20,
         direction: 'EAST' as Direction,
       },
       {
         index: 20,
         direction: 'EAST' as Direction,
       },
       {
         index: 20,
         direction: 'EAST' as Direction,
       },
       {
         index: 27,
         direction: 'SOUTHEAST' as Direction,
       },
       {
         index: 34,
         direction: 'SOUTHEAST' as Direction,
       },
     ],
   },
 };

export default Level;