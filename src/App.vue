<template lang="pug">
  #app
    GameOptions
    .section
      .container
        // img(src="@/assets/logo.png")
        router-view
</template>

<script>
import GameOptions from '@/components/GameOptions.vue'

export default {
  components: {
    GameOptions,
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

</style>
