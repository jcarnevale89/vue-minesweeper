const make2DArray = (cols, rows) => {
  const arr = new Array(cols)

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
  }

  return arr
}

// Generates a New Grid of Tiles
const generateTiles = ({ state, commit, dispatch }) => {
  console.log('Generating Tiles')
  
  const tileDirectory = make2DArray(state.columns, state.rows)
  const tiles = []
  let key = 0

  for (let x = 0; x < state.columns; x++) {
    for (let y = 0; y < state.rows; y++) {
      const tile = {
        key,
        x,
        y,
        mine: false,
        count: 0,
        covered: false,
        flagged: false,
      }
    
      tiles.push(tile)
      tileDirectory[x][y] = key
      key++
    }
  }

  commit('setTiles', tiles)
  commit('setTileDirectory', tileDirectory)

  dispatch('generateMines')
}

// Randomly makes tiles mines
const generateMines = ({ state, commit, dispatch }) => {
  console.log('Making Mines')
  const options = []

  state.tiles.forEach((tile) => {
    options.push({
      x: tile.x,
      y: tile.y,
    })
  })
  
  for (let n = 0; n < state.mineCount; n++) {
    const index = Math.floor(Math.random() * options.length)
    const { x, y } = options[index]
    const tileIndex = state.tileDirectory[x][y]
    options.splice(index, 1)
    commit('setMine', tileIndex)
  }

  dispatch('generateCount')
}

// Sets the count to the number of mines around the tile
const generateCount = ({ state, commit }) => {
  console.log('Counting...')

  state.tiles.forEach((tile) => {
    let count = 0
    if (tile.mine) {
      count = -1
      return
    }
    
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      for (let yOffset = -1; yOffset <= 1; yOffset++) {
        const x = tile.x + xOffset
        const y = tile.y + yOffset

        if (x > -1 && x < state.columns && y > -1 && y < state.rows) {
          const tileIndex = state.tileDirectory[x][y]
          const surroundingTile = state.tiles[tileIndex]
          if (surroundingTile.mine) {
            count++
          }
        }
      }
    }

    commit('setSurroundingCount', {
      tileIndex: tile.key,
      count,
    })
  })
}

// const showTile = ({ state, commit, dispatch }, tileCoordinates) => {
//   commit('showTile', tileCoordinates)
//   dispatch('floodOpen', tileCoordinates)
// }

// const floodOpen = ({ state, commit }, tileCoordinates) => {
//   // const newGrid = state.tiles

//   for (let xOffset = -1; xOffset <= 1; xOffset++) {
//     for (let yOffset = -1; yOffset <= 1; yOffset++) {
//       const x = tileCoordinates.x + xOffset
//       const y = tileCoordinates.y + yOffset

//       if (x > -1 && x < state.columns && y > -1 && y < state.rows) {
//         const sideTile = state.tiles[x][y]
//         console.log(sideTile)
//       }
//     }
//   }
// }

export default {
  generateTiles,
  generateMines,
  generateCount,
  // showTile,
  // floodOpen,
}
