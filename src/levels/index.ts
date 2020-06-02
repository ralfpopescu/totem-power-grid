import type { Solution } from '../logic/getSolutionFromState';
import l0 from './0';
import l1 from './1';

export type Level = { 
  solution: Solution; 
  dimension: number; 
  name: string; 
  number: number;
  difficulty: string;
}

const Levels = { l0, l1 };

export default Levels;