<template lang="pug">
  .game-stats
    .stat-box
      | {{ mineCount }}
    // .stat-box
    //   | X
    .stat-box
      | Timer
    
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GameStats',
  computed: {
    ...mapState([
      'columns',
      'tileSize',
      'mineCount',
    ]),
  },
  // methods: {
  // },
}
</script>

<style lang="stylus">
.game-stats
  background-color #d9d9d9
  margin 0 auto
  display flex
  justify-content space-between
  padding 10px
  height 40px

  .stat-box
    display flex
    justify-content center
    align-items center
    background-color #333333
    color #ffffff
    height 100%
    width 60px
</style>
