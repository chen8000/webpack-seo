/*
 * @Date: 2020-07-24 14:39:03
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-24 15:11:45
 */ 
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
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