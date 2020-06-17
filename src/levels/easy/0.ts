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
       "2":"ELECTRIC_CURRENT" as FieldPower,
       "3":"ELECTRIC_CURRENT" as FieldPower,
       "4":null,
       "5":null,
       "6":null,
       "7":null,
       "8":"ELECTRIC_CURRENT" as FieldPower,
       "9":"ELECTRIC_CURRENT" as FieldPower,
       "10":"BURNING" as FieldPower,
       "11":null,
       "12":null,
       "13":null,
       "14":null,
       "15":null,
       "16":"BURNING" as FieldPower,
       "17":null,
       "18":null,
       "19":"BURNING" as FieldPower,
       "20":null,
       "21":null,
       "22":null,
       "23":"BURNING" as FieldPower,
       "24":null,
    },
    "lightBeams":[
       {
          "index":12,
          "direction":"NORTH" as Direction,
       },
       {
          "index":12,
          "direction":"NORTH" as Direction,
       },
       {
          "index":8,
          "direction":"NORTHEAST" as Direction,
       },
       {
          "index":4,
          "direction":"NORTHEAST" as Direction,
       },
       {
          "index":12,
          "direction":"NORTH" as Direction,
       },
       {
          "index":6,
          "direction":"NORTHWEST" as Direction,
       },
       {
          "index":12,
          "direction":"NORTH" as Direction,
       },
       {
          "index":6,
          "direction":"NORTHWEST" as Direction,
       },
       {
          "index":1,
          "direction":"NORTH" as Direction,
       },
       {
          "index":12,
          "direction":"NORTH" as Direction,
       },
       {
          "index":6,
          "direction":"NORTHWEST" as Direction,
       },
       {
          "index":5,
          "direction":"WEST" as Direction,
       },
    ],
 },
 };

 export default Level;