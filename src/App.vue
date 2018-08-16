<template lang="pug">
  #app
    Navbar
    .section
      .container
        // img(src="@/assets/logo.png")
        router-view
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>


<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

.fade-enter-active
.fade-leave-active
  transition opacity .35s

.fade-enter
.fade-leave-to
  opacity 0

</style>
