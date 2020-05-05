import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: require('@/view/index.vue').default
    },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
