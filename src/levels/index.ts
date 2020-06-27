import type { Solution } from '../logic/getSolutionFromState';
import l0 from './0';
import l1 from './1';
import easy from './easy';
import medium from './medium';
import hard from './hard';
import veryHard from './very-hard';

export type Level = { 
  solution: Solution; 
  dimension: number; 
  name: string; 
  number: number;
  difficulty: string;
}

const easyLevels = Object.values(easy);
const mediumLevels = Object.values(medium);
const hardLevels = Object.values(hard);
const veryHardLevels = Object.values(veryHard);

type LevelMap = { [key: string]: Level }


const levelMap: LevelMap = [...easyLevels, ...mediumLevels, ...hardLevels, ...veryHardLevels]
.reduce((acc: LevelMap, curr: Level) => {
  acc[curr.number] = curr;
  return acc;
}, {});

const Levels = { l0, l1, easy, medium, hard, veryHard, levelMap };

export default Levels;