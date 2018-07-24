<template lang="pug">
  .grid(:style="{ height, width }")
    template(v-for="column in tileDirectory")
      Tile(
        v-for="tile in column"
        :key="tile.key"
        :tile="tile"
      )
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Tile from './Tile.vue'

export default {
  name: 'Grid',
  components: {
    Tile,
  },
  computed: {
    ...mapState([
      'tileDirectory',
    ]),
    ...mapGetters([
      'width',
      'height',
    ]),
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
