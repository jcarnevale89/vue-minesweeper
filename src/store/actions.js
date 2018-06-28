/* eslint-disable */
const generateTiles = ({ state, commit }) => {
  // Generate Tiles
  const xCoords = new Array(state.mineCount)
  let key = 0

  for (let x = 0; x < xCoords.length; x += 1) {
    const yCoords = new Array(state.mineCount)

    for (let y = 0; y < yCoords.length; y += 1) {
      const mine = {
        key,
        x,
        y,
        mine: false,
        covered: true,
      }

      yCoords[y] = mine
      key += 1
    }

    xCoords[x] = yCoords
  }

  const mines = []

  // Generate Mines
  while (mines.length < 10) {
    const xC = Math.floor(Math.random() * 10)
    const yC = Math.floor(Math.random() * 10)

    // If the tile is already a mine, skip it
    if (xCoords[xC][yC].mine) {
      continue
    }

    xCoords[xC][yC].mine = true
    mines.push({
      xC,
      yC,
    })
  }

  console.log(mines)

  commit('setTiles', xCoords)
}

const showTile = ({ state, commit }, coords) => {
  commit('showTile', coords)
}

export default {
  generateTiles,
  showTile,
}

