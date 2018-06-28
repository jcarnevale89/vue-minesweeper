/* eslint-disable */
const setTiles = (state, tiles) => {
  state.tiles = tiles
}

const setTileDirectory = (state, tileDirectory) => {
  state.tileDirectory = tileDirectory
}

const setMine = (state, tileIndex) => {
  state.tiles[tileIndex].mine = true
}

const setSurroundingCount = (state, tileData) => {
  state.tiles[tileData.tileIndex].count = tileData.count
}

const showTile = (state, tileCoordinates) => {
  const tile = state.tiles[tileCoordinates.x][tileCoordinates.y]
  tile.covered = false

  if (tile.count === 0) {
    // flood clear logic here
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      for (let yOffset = -1; yOffset <= 1; yOffset++) {
        const x = tileCoordinates.x + xOffset
        const y = tileCoordinates.y + yOffset
  
        if (x > -1 && x < state.columns && y > -1 && y < state.rows) {
          const sideTile = state.tiles[x][y]
          if (!sideTile.mine) {
            sideTile.covered = false
          }
        }
      }
    }

  }
}

const flagTile = (state, tileCoordinates) => {
  state.tiles[tileCoordinates.x][tileCoordinates.y].flagged = !state.tiles[tileCoordinates.x][tileCoordinates.y].flagged
}

export default {
  setTiles,
  setTileDirectory,
  setMine,
  setSurroundingCount,
  showTile,
  flagTile,
}
