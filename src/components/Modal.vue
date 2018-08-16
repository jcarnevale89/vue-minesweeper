<template lang="pug">
.modal.is-active
  .modal-background(@click="close")
  .modal-content
    .box
      slot
  button.modal-close.is-large(@click="close")    
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="stylus">
.modal
  position fixed
  z-index 1000000
</style>
