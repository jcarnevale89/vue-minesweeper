<template lang="pug">
  .game
    Grid
    button.button.is-primary(@click="newGrid") New Grid
    // button.button.is-warning(@click="$store.dispatch('setMineCount')") Change Mines
</template>

<script>
import Grid from '@/components/Grid.vue'

export default {
  name: 'Game',
  components: {
    Grid,
  },
  methods: {
    newGrid() {
      this.$store.dispatch('generateTiles')
    },
  },
}
</script>
