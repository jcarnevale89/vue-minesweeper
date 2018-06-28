import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/views/Game.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Game,
    },
  ],
})
