/*
 * @Date: 2020-07-16 18:46:56
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-08-06 16:23:46
 */ 
import Vue from 'vue'
import App from './app.vue'
import router from './route'

new Vue({
  render: h => h(App),
  router,
  // mounted() {
  //   document.dispatchEvent(new Event('custom-render-trigger'))
  // }
}).$mount('#app')
