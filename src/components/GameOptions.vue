<template lang="pug">
  .game-options
    .box
      .buttons.has-addons.is-centered
        .button(
          v-for="preset in presets"
          @click="selectPreset(preset.name)"
          :class="selectedPreset.selectedClass"
        )
          | {{ preset.name }}
    
</template>

<script>
import { mapState } from 'vuex'

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
  computed: {
    ...mapState([
      'columns',
      'rows',
    ]),
    selectedPreset() {
      const [selected] = this.presets.filter(preset => preset.selected)
      return selected
      // return [
      //   'is-selected',
      //   this.selected.selectedClass,
      // ]
    },
  },
  methods: {
    selectPreset(name) {
      this.presets.forEach((preset) => {
        const p = preset
        p.selected = false
        if (p.name === name) {
          p.selected = true
        }
      })
    },
  },
}
</script>

<style lang="stylus">

</style>
