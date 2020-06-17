import type { FieldPower } from '../../logic/getSolutionFromState';
import type { Direction } from '../../redux/reducers';

const Level = {
   number: 0,
   name: 'Fisherman’s Dream',
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
       "6":"ELECTRIC_CURRENT" as FieldPower,
       "7":null,
       "8":null,
       "9":null,
       "10":null,
       "11":"BURNING" as FieldPower,
       "12":null,
       "13":"BURNING" as FieldPower,
       "14":null,
       "15":null,
       "16":null,
       "17":null,
       "18":null,
       "19":"BURNING" as FieldPower,
       "20":null,
       "21":null,
       "22":null,
       "23":null,
       "24":null,
    },
    "lightBeams":[
       {
          "index":16,
          "direction":"EAST" as Direction,
       },
       {
          "index":17,
          "direction":"EAST" as Direction,
       },
       {
          "index":16,
          "direction":"EAST" as Direction,
       },
       {
          "index":17,
          "direction":"EAST" as Direction,
       },
       {
          "index":13,
          "direction":"NORTHEAST" as Direction,
       },
       {
          "index":9,
          "direction":"NORTHEAST" as Direction,
       },
       {
          "index":16,
          "direction":"EAST" as Direction,
       },
       {
          "index":17,
          "direction":"EAST" as Direction,
       },
       {
          "index":23,
          "direction":"SOUTHEAST" as Direction,
       },
       {
          "index":16,
          "direction":"EAST" as Direction,
       },
       {
          "index":17,
          "direction":"EAST" as Direction,
       },
       {
          "index":23,
          "direction":"SOUTHEAST" as Direction,
       },
       {
          "index":16,
          "direction":"EAST" as Direction,
       },
       {
          "index":17,
          "direction":"EAST" as Direction,
       },
       {
          "index":23,
          "direction":"SOUTHEAST" as Direction,
       },
       {
          "index":24,
          "direction":"EAST" as Direction,
       },
    ],
 },
 };

 export default Level;