import Vue from 'vue'
import Router from 'vue-router'
import Move from '@/components/move.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/move'
    },
    {
      path: '/move',
      name: 'move',
      component: Move
    }
  ]
})
