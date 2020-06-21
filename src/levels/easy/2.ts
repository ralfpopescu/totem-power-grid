import type { FieldPower } from '../../logic/getSolutionFromState';
import type { Direction } from '../../redux/reducers';

const Level = {
   number: 2,
   name: 'Surfer Hideout',
   dimension: 5,
   difficulty: 'EASY',
   solution: {
    "tileSolution":{
       "0":"BURNING" as FieldPower,
       "1":null,
       "2":null,
       "3":null,
       "4":"ELECTRIC_CURRENT" as FieldPower,
       "5":null,
       "6":"BURNING" as FieldPower,
       "7":null,
       "8":"ELECTRIC_CURRENT" as FieldPower,
       "9":"ELECTRIC_CURRENT" as FieldPower,
       "10":"BURNING" as FieldPower,
       "11":null,
       "12":"ELECTRIC_CURRENT" as FieldPower,
       "13":"ELECTRIC_CURRENT" as FieldPower,
       "14":null,
       "15":null,
       "16":null,
       "17":null,
       "18":"ELECTRIC_CURRENT" as FieldPower,
       "19":"ELECTRIC_CURRENT" as FieldPower,
       "20":"BURNING" as FieldPower,
       "21":null,
       "22":null,
       "23":null,
       "24":null,
    },
    "lightBeams":[
       {
          "index":16,
          "direction":"SOUTH" as Direction,
       },
       {
          "index":16,
          "direction":"SOUTH" as Direction,
       },
       {
          "index":20,
          "direction":"SOUTHWEST" as Direction,
       },
       {
          "index":16,
          "direction":"SOUTH" as Direction,
       },
       {
          "index":22,
          "direction":"SOUTHEAST" as Direction,
       },
    ],
 },
 };

 export default Level;