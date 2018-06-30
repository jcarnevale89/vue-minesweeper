/* eslint-disable */
const setTileDirectory = (state, tileDirectory) => {
  state.tileDirectory = tileDirectory
}

const setMine = (state, tileCoordinates) => {
  state.tileDirectory[tileCoordinates.x][tileCoordinates.y].mine = true
}

const setSurroundingCount = (state, tileData) => {
  state.tileDirectory[tileData.x][tileData.y].count = tileData.count
}

const showTile = (state, tileCoordinates) => {
  state.tileDirectory[tileCoordinates.x][tileCoordinates.y].covered = false
}

const flagTile = (state, tileCoordinates) => {
  state.tileDirectory[tileCoordinates.x][tileCoordinates.y].flagged = !state.tileDirectory[tileCoordinates.x][tileCoordinates.y].flagged
}

const setAutoShow = (state, tileCoordinates) => {
  state.tileDirectory[tileCoordinates.x][tileCoordinates.y].autoShow = true
}

const setTileSize = (state, tileSize) => {
  state.tileSize = tileSize
}

const setColumns = (state, columns) => {
  state.columns = columns
}

const setRows = (state, rows) => {
  state.rows = rows
}

const setMineCount = (state, mineCount) => {
  state.mineCount = mineCount
}

export default {
  setTileDirectory,
  setMine,
  setSurroundingCount,
  showTile,
  flagTile,
  setAutoShow,
  setTileSize,
  setColumns,
  setRows,
  setMineCount,
}
