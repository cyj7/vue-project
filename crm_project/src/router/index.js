import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Page from '@/views/Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/page/:id',
      name: 'Page',
      component: Page
    }
  ]
})
