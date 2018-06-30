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
  let key = 0

  for (let x = 0; x < state.columns; x++) {
    for (let y = 0; y < state.rows; y++) {
      const tile = {
        key,
        x,
        y,
        mine: false,
        count: 0,
        covered: true,
        flagged: false,
        autoShow: false,
      }
    
      tileDirectory[x][y] = tile
      key++
    }
  }

  commit('setTileDirectory', tileDirectory)
  dispatch('generateMines')
}

// Randomly makes tiles mines
const generateMines = ({ state, commit, dispatch }) => {
  console.log('Making Mines')
  const options = []

  for (let x = 0; x < state.columns; x++) {
    for (let y = 0; y < state.rows; y++) {
      options.push({ x, y })
    }
  }
  
  for (let n = 0; n < state.mineCount; n++) {
    const index = Math.floor(Math.random() * options.length)
    const { x, y } = options[index]
    // Remove tile that was just selected
    options.splice(index, 1)
    commit('setMine', { x, y })
  }

  dispatch('generateCount')
}

// Sets the count to the number of mines around the tile
const generateCount = ({ state, commit }) => {
  console.log('Counting...')

  for (let xCoord = 0; xCoord < state.columns; xCoord++) {
    for (let yCoord = 0; yCoord < state.rows; yCoord++) {
      const tile = state.tileDirectory[xCoord][yCoord]
      let count = 0
      if (tile.mine) {
        count = -1
      } else {
        for (let xOffset = -1; xOffset <= 1; xOffset++) {
          for (let yOffset = -1; yOffset <= 1; yOffset++) {
            const x = tile.x + xOffset
            const y = tile.y + yOffset
            
            if (x > -1 && x < state.columns && y > -1 && y < state.rows) {
              const surroundingTile = state.tileDirectory[x][y]
              if (surroundingTile.mine) {
                count++
              }
            }
          }
        }
      }

      commit('setSurroundingCount', {
        x: tile.x,
        y: tile.y,
        count,
      })
    }
  }
}

// Show the tile that was clicked
const showTile = ({ state, commit }, tileCoordinates) => {
  commit('showTile', tileCoordinates)
  const tile = state.tileDirectory[tileCoordinates.x][tileCoordinates.y]
  if (tile.count === 0) {
    // Reveal surrounding tiles that are 0
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      for (let yOffset = -1; yOffset <= 1; yOffset++) {
        const x = tile.x + xOffset
        const y = tile.y + yOffset
        
        if (x > -1 && x < state.columns && y > -1 && y < state.rows) {
          const surroundingTile = state.tileDirectory[x][y]
          if (!surroundingTile.mine && surroundingTile.covered) {
            commit('setAutoShow', { x, y })
          }
        }
      }
    }
  }
}

const setMineCount = ({ commit }) => {
  commit('setMineCount', 20)
}

export default {
  generateTiles,
  generateMines,
  generateCount,
  showTile,
  setMineCount,
}
