<template lang="pug">
  .game-options
    nav.navbar.is-dark
      .navbar-brand
        router-link.navbar-item(to="/")
          img(
            src='http://placehold.it/640x160'
          )
        .navbar-burger.burger(data-target='navbarExampleTransparentExample')
          span
          span
          span
      #navbarExampleTransparentExample.navbar-menu
        .navbar-start
          router-link.navbar-item(to="/")
            | Home
          a.navbar-item
            | Options
          // .navbar-item.has-dropdown.is-hoverable
          //   a.navbar-link(href='/documentation/overview/start/')
          //     | Docs
          //   .navbar-dropdown.is-boxed
          //     a.navbar-item(href='/documentation/overview/start/')
          //       | Overview
          //     a.navbar-item(href='https://bulma.io/documentation/modifiers/syntax/')
          //       | Modifiers
          //     a.navbar-item(href='https://bulma.io/documentation/layout/container/')
          //       | Layout
          //     a.navbar-item(href='https://bulma.io/documentation/form/general/')
          //       | Form
          //     hr.navbar-divider
          //     a.navbar-item(href='https://bulma.io/documentation/elements/box/')
          //       | Elements
          //     a.navbar-item.is-active(href='https://bulma.io/documentation/components/breadcrumb/')
          //       | Components
        .navbar-end
          .navbar-item
            .field.is-grouped
              p.control
                a.bd-tw-button.button(data-social-network='Twitter', data-social-action='tweet', data-social-target='http://localhost:4000', target='_blank', href='https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://localhost:4000&via=jgthms')
                  span.icon
                    i.fab.fa-twitter
                  span
                    | Tweet

    .box
      .buttons.has-addons.is-centered
        .button.is-primary(@click="newGrid") New Game
        .button(@click="newGrid") Options
    .box
      .buttons.has-addons.is-centered
        .button(
          v-for="preset in presets"
          @click="selectPreset(preset.name)"
          :class="selectedPreset.selectedClass"
        )
          | {{ preset.name }}
    
    GameStats
    
</template>

<script>
import { mapState } from 'vuex'
import GameStats from './GameStats.vue'

export default {
  name: 'GameOptions',
  components: {
    GameStats,
  },
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
    newGrid() {
      this.$store.dispatch('generateTiles')
    },
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
