import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Page from '@/views/Page'
import CreateNew from '@/views/CreateNew'
import ListView from '@/views/ListView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/page/:id', //分页
      name: 'Page',
      component: Page
    },
    {
      path: '/create-new',  //创建新用户
      name: 'CreateNew',
      component: CreateNew
    },{
      path: '/list', //列表页
      name: 'ListView',
      component: ListView
    }
  ]
})
