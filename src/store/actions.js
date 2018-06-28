/* eslint-disable */
const generateTiles = ({ state, commit }) => {
  // Generate Tiles
  let grid = make2DArray(state.columns, state.rows)
  let key = 0

  for (let x = 0; x < state.columns; x++) {
    for (let y = 0; y < state.rows; y++) {
      const mine = {
        key,
        x,
        y,
        mine: false,
        count: 0,
        covered: true,
      }
    
      grid[x][y] = mine
      key++
    }
  }
  
  // Generate Mines
  grid = generateMines(grid, state.columns, state.rows, state.mineCount)

  // Generate Mine Count
  grid = generateMineCount(grid, state.columns, state.rows)

  commit('setTiles', grid)
}

const showTile = ({ state, commit }, coords) => {
    commit('showTile', coords)
}

export default {
  generateTiles,
  showTile,
}

const make2DArray = (cols, rows) => {
  const arr = new Array(cols)

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
  }

  return arr
}

const generateMines = (grid, cols, rows, count) => {
  const newGrid = grid
  const mines = []
  while (mines.length < count) {
    const xC = Math.floor(Math.random() * cols)
    const yC = Math.floor(Math.random() * rows)

    // If the tile is already a mine, skip it
    if (newGrid[xC][yC].mine) {
      continue
    }

    newGrid[xC][yC].mine = true
    mines.push({
      xC,
      yC,
    })
  }

  return newGrid
}

const generateMineCount = (grid, cols, rows) => {
  const newGrid = grid

  newGrid.forEach(col => {
    col.forEach(tile => {
      let count = 0
      if (tile.mine) {
        count = -1
      } else {
        for (let xOffset = -1; xOffset <= 1; xOffset++) {
          for (let yOffset = -1; yOffset <= 1; yOffset++) {
            const x = tile.x + xOffset
            const y = tile.y + yOffset
  
            if (x > -1 && x < cols && y > -1 && y < rows) {
              const sideTile = newGrid[x][y]
              if (sideTile.mine) {
                count++
              }
            }
          }
        }
      }
      tile.count = count
    })
  })

  return newGrid
}
