<template lang="pug">
  .game
    Grid
    button.button.is-primary(@click="newGrid") New Grid
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
