<template lang="pug">
  .grid
    template(v-for="tile in grid")
      Tile(
        v-for="x in tile"
        :key="x.key"
        :x="x.x"
        :y="x.y"
      )
</template>

<script>
import Tile from './Tile.vue'

export default {
  name: 'Grid',
  components: {
    Tile,
  },
  computed: {
    grid() {
      return this.$store.state.grid
    },
  },
  created() {
    this.$store.dispatch('generateGrid', 10)
  },
}
</script>

<style lang="stylus">
.grid
  display flex
  flex-wrap wrap
  flex-direction column
  width 500px
  height 500px
  border 1px solid #000
</style>

