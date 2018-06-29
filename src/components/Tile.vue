<template lang="pug">
  .tile(:style="styleObject")
    .cover(
      v-if="tile.covered"
      @click="showTile"
      @click.right.prevent="flagTile"
      :class="{ 'flagged': tile.flagged }"
    )
    .content(v-else)
      .mine(v-if="tile.mine")
      .mine-count(
        v-else
        :class="colorClass"
      )
        | {{ tile.count }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Tile',
  props: {
    tile: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState([
      'tileSize',
      'columns',
      'rows',
    ]),
    styleObject() {
      return {
        width: `${(this.tileSize * this.columns) / this.columns}px`,
        height: `${(this.tileSize * this.rows) / this.rows}px`,
      }
    },
    colorClass() {
      return `color-${this.tile.count}`
    },
  },
  watch: {
    tile: {
      handler() {
        // console.log('tile changed')
        // console.log(newVal)
        console.log(this.tile)
        this.showTile()
      },
      deep: true,
    },
  },
  methods: {
    showTile() {
      if (this.tile.covered && !this.tile.flagged) {
        this.$store.dispatch('showTile', this.tile.key)
      }
    },
    flagTile() {
      if (this.tile.covered) {
        this.$store.commit('flagTile', this.tile.key)
      }
    },
  },
}
</script>

<style lang="stylus">
.tile
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

    &.flagged
      background-color blue

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
      font-weight 700

      &.color-0
        display none

      &.color-1
        color #0009FF

      &.color-2
        color #017000

      &.color-3
        color #CC0000

      &.color-4
        color #000270

      &.color-5
        color #700000

      &.color-6
        color #007070

      &.color-7
        color #000000

      &.color-8
        color #707070

</style>

