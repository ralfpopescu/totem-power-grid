import type { Tiles, FieldType } from '.';
import { returnAdjacentCoordinates } from './calculateFields';
import calculateIndexFromPosition from '../../logic/calculateIndexFromPosition';

type WaterTile = { index: number; appliedBy: string; displacedBy: Array<string> }

const doEarthWaterDispersion = (tiles: Tiles, dimension: number): Tiles => {
  const indicesWithTiles = Object.keys(tiles);
  const tilesIndicesWithEarthAndWater = indicesWithTiles
  .filter(index => tiles[index].fields.map(f => f.type).includes('FLOODED') 
  && tiles[index].fields.map(f => f.type).includes('EARTH'));

  if(tilesIndicesWithEarthAndWater.length === 0) {
    return tiles;
  }

  const newTiles: Tiles = { ...tiles };
  const tilesToAddWaterTo: Array<WaterTile> = [];

  tilesIndicesWithEarthAndWater.forEach(index => {
    const totemIdsThatAreDispersingWater = tiles[index].fields.filter(f => f.type === 'FLOODED').map(f => f.appliedBy);
    const earthTotemIdsThatAreDisplacingWater = tiles[index].fields.filter(f => f.type === 'EARTH').map(f => f.appliedBy); 
    const adjacentCoordinates = returnAdjacentCoordinates(parseInt(index, 10), dimension);
    const adjacentIndices = adjacentCoordinates.map(coord => calculateIndexFromPosition({ ...coord, dimension }));

    adjacentIndices.forEach(i => {
      const tile = tiles[i];
      const { fields, totem } = tile;
      const fieldTypes = fields.map(f => f.type);
      const fieldAppliedBys = fields.map(f => f.appliedBy);

      const totemIdsThatHaveNotAppliedWater = totemIdsThatAreDispersingWater
      .filter(tid => !fieldAppliedBys.includes(tid));

      totemIdsThatHaveNotAppliedWater.forEach(totemId => {
        tilesToAddWaterTo.push({ index: i, appliedBy: totemId, displacedBy: earthTotemIdsThatAreDisplacingWater });
      });


    });
    if(tilesToAddWaterTo.length !== 0) {
      tilesToAddWaterTo.forEach(waterTile => {
        newTiles[waterTile.index] = {...newTiles[waterTile.index], 
          fields: [...newTiles[waterTile.index].fields, { 
            type: 'FLOODED', 
            appliedBy: waterTile.appliedBy, 
            displacedBy: waterTile.displacedBy } ] };
      });
    }
  });
  if(tilesToAddWaterTo.length > 0) {
    return doEarthWaterDispersion(newTiles, dimension);
  } 
    return newTiles;
  
};

export default doEarthWaterDispersion;