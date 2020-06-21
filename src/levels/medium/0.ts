import type { FieldPower } from '../../logic/getSolutionFromState';
import type { Direction } from '../../redux/reducers';

const Level = {
   number: 5,
   name: 'Fire Coast',
   dimension: 6,
   difficulty: 'MEDIUM',
   solution: {
    "tileSolution":{
       "0":null,
       "1":null,
       "2":"BURNING" as FieldPower,
       "3":null,
       "4":null,
       "5":null,
       "6":null,
       "7":null,
       "8":null,
       "9":"BURNING" as FieldPower,
       "10":"BURNING" as FieldPower,
       "11":null,
       "12":null,
       "13":null,
       "14":"BURNING" as FieldPower,
       "15":"BURNING" as FieldPower,
       "16":null,
       "17":"BURNING" as FieldPower,
       "18":"BURNING" as FieldPower,
       "19":"BURNING" as FieldPower,
       "20":null,
       "21":"BURNING" as FieldPower,
       "22":null,
       "23":null,
       "24":null,
       "25":"BURNING" as FieldPower,
       "26":"BURNING" as FieldPower,
       "27":null,
       "28":null,
       "29":null,
       "30":"BURNING" as FieldPower,
       "31":null,
       "32":null,
       "33":null,
       "34":null,
       "35":null,
    },
    "lightBeams":[
       {
          "index":10,
          "direction":"SOUTH" as Direction,
       },
       {
          "index":16,
          "direction":"SOUTH" as Direction,
       },
       {
          "index":25,
          "direction":"NORTH" as Direction,
       },
       {
          "index":19,
          "direction":"NORTH" as Direction,
       },
       {
          "index":13,
          "direction":"NORTH" as Direction,
       },
    ],
 },
 };

 export default Level;