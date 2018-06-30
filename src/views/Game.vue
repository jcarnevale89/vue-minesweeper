<template lang="pug">
  .game
    GameOptions
    Grid
    button.button.is-primary(@click="newGrid") New Grid
    // button.button.is-warning(@click="$store.dispatch('setMineCount')") Change Mines
</template>

<script>
import GameOptions from '@/components/GameOptions.vue'
import Grid from '@/components/Grid.vue'

export default {
  name: 'Game',
  components: {
    GameOptions,
    Grid,
  },
  methods: {
    newGrid() {
      this.$store.dispatch('generateTiles')
    },
  },
}
</script>
