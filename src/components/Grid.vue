<template lang="pug">
  .grid
    template(v-for="cols in tiles")
      Tile(
        v-for="tile in cols"
        :key="tile.key"
        :tile="tile"
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
    tiles() {
      return this.$store.state.tiles
    },
  },
  created() {
    this.$store.dispatch('generateTiles')
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
  border 3px solid #707070
</style>

