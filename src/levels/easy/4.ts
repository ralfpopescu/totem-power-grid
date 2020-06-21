import type { FieldPower } from '../../logic/getSolutionFromState';
import type { Direction } from '../../redux/reducers';

const Level = {
   number: 4,
   name: 'Wanabamadada',
   dimension: 5,
   difficulty: 'EASY',
   solution: {
    "tileSolution":{
       "0":null,
       "1":null,
       "2":null,
       "3":null,
       "4":null,
       "5":"ELECTRIC_CURRENT" as FieldPower,
       "6":null,
       "7":null,
       "8":null,
       "9":"ELECTRIC_CURRENT" as FieldPower,
       "10":"ELECTRIC_CURRENT" as FieldPower,
       "11":null,
       "12":null,
       "13":null,
       "14":"ELECTRIC_CURRENT" as FieldPower,
       "15":"ELECTRIC_CURRENT" as FieldPower,
       "16":"ELECTRIC_CURRENT" as FieldPower,
       "17":null,
       "18":"ELECTRIC_CURRENT" as FieldPower,
       "19":"ELECTRIC_CURRENT" as FieldPower,
       "20":null,
       "21":"ELECTRIC_CURRENT" as FieldPower,
       "22":null,
       "23":"ELECTRIC_CURRENT" as FieldPower,
       "24":null,
    },
    "lightBeams":[
       {
          "index":1,
          "direction":"EAST" as Direction,
       },
       {
          "index":2,
          "direction":"EAST" as Direction,
       },
       {
          "index":3,
          "direction":"EAST" as Direction,
       },
       {
          "index":4,
          "direction":"EAST" as Direction,
       },
    ],
 },
 };

 export default Level;