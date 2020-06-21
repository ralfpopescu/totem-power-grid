import type { FieldPower } from '../../logic/getSolutionFromState';
import type { Direction } from '../../redux/reducers';

const Level = {
   number: 7,
   name: 'Rum Production Facilties',
   dimension: 6,
   difficulty: 'MEDIUM',
   solution: {
    "tileSolution":{
       "0":null,
       "1":null,
       "2":null,
       "3":"BURNING" as FieldPower,
       "4":null,
       "5":null,
       "6":"BURNING" as FieldPower,
       "7":null,
       "8":null,
       "9":null,
       "10":null,
       "11":null,
       "12":null,
       "13":null,
       "14":null,
       "15":"ELECTRIC_CURRENT" as FieldPower,
       "16":"ELECTRIC_CURRENT" as FieldPower,
       "17":"ELECTRIC_CURRENT" as FieldPower,
       "18":"BURNING" as FieldPower,
       "19":null,
       "20":null,
       "21":null,
       "22":null,
       "23":"ELECTRIC_CURRENT" as FieldPower,
       "24":null,
       "25":null,
       "26":null,
       "27":null,
       "28":null,
       "29":"ELECTRIC_CURRENT" as FieldPower,
       "30":null,
       "31":null,
       "32":null,
       "33":null,
       "34":null,
       "35":null,
    },
    "lightBeams":[
       {
          "index":8,
          "direction":"EAST" as Direction,
       },
       {
          "index":9,
          "direction":"EAST" as Direction,
       },
       {
          "index":10,
          "direction":"EAST" as Direction,
       },
       {
          "index":8,
          "direction":"EAST" as Direction,
       },
       {
          "index":9,
          "direction":"EAST" as Direction,
       },
       {
          "index":10,
          "direction":"EAST" as Direction,
       },
       {
          "index":5,
          "direction":"NORTHEAST" as Direction,
       },
       {
          "index":8,
          "direction":"EAST" as Direction,
       },
       {
          "index":9,
          "direction":"EAST" as Direction,
       },
       {
          "index":10,
          "direction":"EAST" as Direction,
       },
       {
          "index":5,
          "direction":"NORTHEAST" as Direction,
       },
       {
          "index":8,
          "direction":"EAST" as Direction,
       },
       {
          "index":9,
          "direction":"EAST" as Direction,
       },
       {
          "index":10,
          "direction":"EAST" as Direction,
       },
       {
          "index":5,
          "direction":"NORTHEAST" as Direction,
       },
       {
          "index":8,
          "direction":"EAST" as Direction,
       },
       {
          "index":9,
          "direction":"EAST" as Direction,
       },
       {
          "index":10,
          "direction":"EAST" as Direction,
       },
       {
          "index":17,
          "direction":"SOUTHEAST" as Direction,
       },
    ],
 },
 };

 export default Level;