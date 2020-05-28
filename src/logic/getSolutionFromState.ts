import type { FieldType, State, LightBeam } from '../redux/reducers';

export type FieldPower = 'BURNING' | 'ELECTRIC_CURRENT' | null

export type TileSolution = { [key: string]: FieldPower }

export type Solution = { tileSolution: TileSolution; lightBeams: Array<LightBeam>}

const getSolutionFromFields = (fields: Array<FieldType>) => {
  if(fields.includes('BURNING') && fields.length === 1) {
    return 'BURNING';
  }
  if(fields.includes('ELECTRIC_CURRENT') && !fields.includes('BURNING')) {
    return 'ELECTRIC_CURRENT';
  }
  return null;
};

const getSolutionFromState = (state: State): Solution => {
  const { tiles, lightBeams } = state;
  const tileIndices = Object.keys(tiles).map(index => parseInt(index));
  const tileSolution = tileIndices.reduce((sol: TileSolution, tileIndex: number) => {
    const { fields } = tiles[tileIndex];
    sol[tileIndex] = getSolutionFromFields(fields);
    return sol;
  }, {} as TileSolution);  
  return { tileSolution, lightBeams };
};

export default getSolutionFromState;