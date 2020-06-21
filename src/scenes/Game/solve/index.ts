import type { Solution } from '../../../logic/getSolutionFromState';

const solve = (playerSolution: Solution, actualSolution: Solution) => {
  const playerLightBeams = playerSolution.lightBeams.map(({ index }) => index).sort();
  const actualLightBeams = playerSolution.lightBeams.map(({ index }) => index).sort();
  const areLightBeamsEqual = JSON.stringify(playerLightBeams) === JSON.stringify(actualLightBeams); 

  const playerTiles = playerSolution.tileSolution;
  const actualTiles = actualSolution.tileSolution;

  const areTilesEqual = JSON.stringify(playerTiles) === JSON.stringify(actualTiles); 

  return areLightBeamsEqual && areTilesEqual;
};

export default solve;