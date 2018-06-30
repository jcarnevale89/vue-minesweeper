<template lang="pug">
  .grid(:style="styleObject")
    template(v-for="column in tileDirectory")
      Tile(
        v-for="tile in column"
        :key="tile.key"
        :tile="tile"
      )
</template>

<script>
import { mapState } from 'vuex'
import Tile from './Tile.vue'

export default {
  name: 'Grid',
  components: {
    Tile,
  },
  computed: {
    ...mapState([
      'tileDirectory',
      'tileSize',
      'columns',
      'rows',
    ]),
    styleObject() {
      return {
        width: `${this.columns * this.tileSize}px`,
        height: `${this.rows * this.tileSize}px`,
      }
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
  border 3px solid #707070
  margin 0 auto
  box-sizing initial
</style>
