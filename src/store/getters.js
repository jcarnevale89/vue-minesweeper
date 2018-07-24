const width = state => `${state.columns * state.tileSize}px`

const height = state => `${state.rows * state.tileSize}px`

export default {
  width,
  height,
}
