import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Page from '@/views/Page'
import CreateNew from '@/views/CreateNew'

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
    },
    {
      path: '/create-new',
      name: 'CreateNew',
      component: CreateNew
    }
  ]
})
