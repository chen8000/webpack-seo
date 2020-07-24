/*
 * @Date: 2020-07-16 18:46:56
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-24 15:19:49
 */ 
import Vue from 'vue'
import App from './app.vue'
import router from './route'

new Vue({
  render: h => h(App),
  router,
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  }
}).$mount('#app')
