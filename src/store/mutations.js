/* eslint-disable */
const setTiles = (state, data) => {
  state.tiles = data
}

const showTile = (state, data) => {
  state.tiles[data.x][data.y].covered = false
}

export default {
  setTiles,
  showTile,
}
