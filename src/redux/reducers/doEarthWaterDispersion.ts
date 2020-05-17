import type { Tiles} from '.'
import { returnAdjacentCoordinates } from './calculateFields'
import calculateIndexFromPosition from '../../logic/calculateIndexFromPosition'

const doEarthWaterDispersion = (tiles: Tiles, dimension: number): Tiles => {
  const indicesWithTiles = Object.keys(tiles)
  const tilesIndicesWithEarthAndWater = indicesWithTiles
  .filter(index => tiles[index].fields.includes('FLOODED') && tiles[index].fields.includes('EARTH'))

  if(tilesIndicesWithEarthAndWater.length === 0) {
    return tiles;
  }

  const newTiles: Tiles = { ...tiles }
  const tilesToAddWaterTo: Array<number> = []

  tilesIndicesWithEarthAndWater.forEach(index => {
    const adjacentCoordinates = returnAdjacentCoordinates(parseInt(index), dimension)
    const adjacentIndices = adjacentCoordinates.map(coord => calculateIndexFromPosition({ ...coord, dimension }))

    adjacentIndices.forEach(index => {
      const tile = tiles[index]
      const { fields, totem } = tile;
      if(!fields.includes('FLOODED') && totem == null) {
        tilesToAddWaterTo.push(index)
      }
    })
    if(tilesToAddWaterTo.length !== 0) {
      tilesToAddWaterTo.forEach(index => {
        newTiles[index] = {...newTiles[index], fields: [...newTiles[index].fields, 'FLOODED' ] }
      })
    }
  })
  if(tilesToAddWaterTo.length > 0) {
    return doEarthWaterDispersion(newTiles, dimension)
  } else {
    return newTiles
  }
}

export default doEarthWaterDispersion