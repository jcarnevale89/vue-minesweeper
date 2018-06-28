<template lang="pug">
  .tile
    .cover(
      v-if="!covered"
      @click="showTile"
    )
    .content
      | {{x}},{{y}}
</template>

<script>
export default {
  name: 'Tile',
  props: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // bomb: false,
      // label: '',
      covered: false,
    }
  },
  methods: {
    showTile() {
      this.covered = !this.covered
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
  background-color lightblue
  border 1px solid #000
  position relative

  .cover
    background-color #cc0000
    position absolute
    top 0
    right 0
    bottom 0
    left 0

</style>

