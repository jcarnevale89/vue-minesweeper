<template lang="pug">
  .tile(
    @click="showTile"
  )
    .cover(v-if="tile.covered")
    .content(v-else)
      .mine(v-if="tile.mine")
      .mine-count(v-else)
        | {{tile.x}},{{tile.y}}
</template>

<script>
export default {
  name: 'Tile',
  props: {
    tile: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showTile() {
      if (this.tile.covered) {
        this.$store.dispatch('showTile', {
          x: this.tile.x,
          y: this.tile.y,
        })
      }
    },
  },
}
</script>

<style lang="stylus">
.tile
  width 10%
  height 10%
  display flex
  justify-content center
  align-items center
  position relative

  .cover
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    background-color #D9D9D9
    border-width 3px
    border-style solid
    border-top-color #FFFFFF
    border-right-color #707070
    border-bottom-color #707070
    border-left-color #FFFFFF

  .content
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    display flex
    justify-content center
    align-items center
    background-color #B5B5B5
    border 1px solid #707070

    .mine
      width 50%
      height 50%
      background-color #cc0000

    .mine-count
      .color-0
        color #999999

      .color-1
        color #0009FF

      .color-2
        color #017000

      .color-3
        color #CC0000

      .color-4
        color #000270

      .color-5
        color #700000

      .color-6
        color #007070

      .color-7
        color #000000

      .color-8
        color #707070

</style>

