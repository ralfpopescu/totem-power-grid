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

const Levels = { l0, l1, easy, medium, hard, veryHard };

export default Levels;