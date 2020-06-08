import type { FieldPower } from '../../logic/getSolutionFromState';
import type { Direction } from '../../redux/reducers';

const Level = {
   number: 0,
   name: 'Rum Production Facilties',
   dimension: 6,
   difficulty: 'MEDIUM',
   solution: {
     tileSolution: {
       '0': 'BURNING' as FieldPower,
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
       '15': null,
       '16': null,
       '17': 'ELECTRIC_CURRENT' as FieldPower,
       '18': 'ELECTRIC_CURRENT' as FieldPower,
       '19': null,
       '20': null,
       '21': null,
       '22': null,
       '23': null,
       '24': null,
     },
     lightBeams: [
       {
         index: 11,
         direction: 'EAST' as Direction,
       },
       {
         index: 12,
         direction: 'EAST' as Direction,
       },
       {
         index: 11,
         direction: 'EAST' as Direction,
       },
       {
         index: 12,
         direction: 'EAST' as Direction,
       },
       {
         index: 11,
         direction: 'EAST' as Direction,
       },
       {
         index: 12,
         direction: 'EAST' as Direction,
       },
       {
         index: 18,
         direction: 'SOUTHEAST' as Direction,
       },
       {
         index: 24,
         direction: 'SOUTHEAST' as Direction,
       },
     ],
   },
 };

 export default Level;