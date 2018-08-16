<template lang="pug">
  .main-navbar
    nav.navbar.is-dark
      .navbar-brand
        router-link.navbar-item(to="/")
          img(
            src='http://placehold.it/640x160'
          )
        .navbar-burger.burger(
          @click="toggleMenu"
        )
          span
          span
          span
      .navbar-menu(:class="{ 'is-active': visible.menu }")
        .navbar-start
          router-link.navbar-item(to="/")
            | Home
          a.navbar-item(@click="newGrid")
            | New Game
          a.navbar-item(@click="toggleOptions")
            | Options
        .navbar-end
          .navbar-item
            .field.is-grouped
              p.control
                a.bd-tw-button.button(data-social-network='Twitter', data-social-action='tweet', data-social-target='http://localhost:4000', target='_blank', href='https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://localhost:4000&via=jgthms')
                  span.icon
                    i.fab.fa-twitter
                  span
                    | Tweet
    transition(name="fade")
      Modal(
        v-if="visible.gameOptions"
        @close="toggleOptions"
      )
        GameOptions
    
</template>

<script>
import Modal from './Modal.vue'
import GameOptions from './GameOptions.vue'

export default {
  name: 'NavBar',
  components: {
    Modal,
    GameOptions,
  },
  data() {
    return {
      visible: {
        menu: false,
        gameOptions: false,
      },
    }
  },
  methods: {
    toggleMenu() {
      this.visible.menu = !this.visible.menu
    },
    toggleOptions() {
      this.visible.gameOptions = !this.visible.gameOptions
    },
    newGrid() {
      this.$store.dispatch('generateTiles')
    },
  },
}
</script>

<style lang="stylus">

</style>
