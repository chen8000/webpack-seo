/*
 * @Date: 2020-07-16 18:46:56
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-08-07 14:49:39
 */ 
import Vue from 'vue'
import App from './app.vue'
import router from './route'
import HUI from 'h-uiii'
import 'h-uiii/h-ui.css'
Vue.use(HUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
