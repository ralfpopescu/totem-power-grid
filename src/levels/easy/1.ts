import type { FieldPower } from '../../logic/getSolutionFromState';
import type { Direction } from '../../redux/reducers';

const Level = {
   number: 1,
   name: 'Jawi’s Coconut Farm',
   dimension: 5,
   difficulty: 'EASY',
   solution: {
    "tileSolution":{
       "0":null,
       "1":"ELECTRIC_CURRENT" as FieldPower,
       "2":"ELECTRIC_CURRENT" as FieldPower,
       "3":null,
       "4":null,
       "5":"ELECTRIC_CURRENT" as FieldPower,
       "6":"ELECTRIC_CURRENT" as FieldPower,
       "7":null,
       "8":null,
       "9":null,
       "10":null,
       "11":"ELECTRIC_CURRENT" as FieldPower,
       "12":null,
       "13":null,
       "14":null,
       "15":null,
       "16":null,
       "17":null,
       "18":null,
       "19":null,
       "20":null,
       "21":"BURNING" as FieldPower,
       "22":null,
       "23":"BURNING" as FieldPower,
       "24":null,
    },
    "lightBeams":[
       {
          "index":19,
          "direction":"NORTH" as Direction,
       },
       {
          "index":14,
          "direction":"NORTH" as Direction,
       },
    ],
 },
 };

 export default Level;