import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Page from '@/views/Page'
import ListView from '@/views/ListView'

import Model from '@/views/Model'
//系统菜单
import MenuList from '@/views/MenuList'
import MenuSet from '@/views/MenuSet'


import NotFound from '@/views/NotFound'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '',
      name: 'Model',
      component: Model,
      children: [ //这里就是二级路由的配置
        {
          path: '/menu/list', //系统菜单
          name: 'MenuList',
          component: MenuList,
        },
        {
          path: '/menu/set', //菜单设置
          name: 'MenuSet',
          component: MenuSet,
        }
      ]
    },
    {
      path: '/page/:id', //分页
      name: 'Page',
      component: Page
    },
    {
      path: '/list', //列表页
      name: 'ListView',
      component: ListView
    },{
      path: "*",
      component: NotFound
    }
  ]
})
