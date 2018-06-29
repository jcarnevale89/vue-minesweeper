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

const showTile = (state, tileIndex) => {
  state.tiles[tileIndex].covered = false
}

const flagTile = (state, tileIndex) => {
  state.tiles[tileIndex].flagged = !state.tiles[tileIndex].flagged
}

export default {
  setTiles,
  setTileDirectory,
  setMine,
  setSurroundingCount,
  showTile,
  flagTile,
}
