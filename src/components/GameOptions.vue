<template lang="pug">
  .game-options
    | Game config options here
    
</template>

<script>
export default {
  name: 'GameOptions',
  data() {
    return {
      presets: [
        {
          name: 'beginner',
          columns: 9,
          rows: 9,
          mines: 10,
          selectedClass: 'is-success',
          selected: true,
        },
        {
          name: 'intermediate',
          columns: 16,
          rows: 16,
          mines: 40,
          selectedClass: 'is-warning',
          selected: false,
        },
        {
          name: 'expert',
          columns: 30,
          rows: 16,
          mines: 99,
          selectedClass: 'is-danger',
          selected: false,
        },
      ],
    }
  },
}
</script>

<style lang="stylus">

</style>
