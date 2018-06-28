/* eslint-disable */
const generateGrid = ({ dispatch, state, commit }, count) => {
  const xCoords = new Array(count)
  let key = 0

  for (let x = 0; x < xCoords.length; x++) {
    const yCoords = new Array(count)

    for (let y = 0; y < yCoords.length; y++) {
      const mine = {
        x,
        y,
        bomb: false,
        key,
      }

      yCoords[y] = mine
      key += 1
    }

    xCoords[x] = yCoords
  }

  commit('setGrid', xCoords)
}

export default {
  generateGrid
}

