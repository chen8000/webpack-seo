/*
 * @Date: 2020-07-24 14:39:03
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-08-06 16:01:17
 */ 
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '*',
    //   name: 'route',
    //   component: () => import('@/views/route.vue')
    // },
    {
      path: '/route',
      name: 'route',
      component: () => import('@/views/route.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test.vue')
    }
  ]
})