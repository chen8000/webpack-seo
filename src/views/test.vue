<!--
 * @Date: 2020-07-19 01:58:30
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-08-07 11:58:49
--> 
<template>
  <div>
    {{txt}}
    <router-link to="/route">to route page</router-link>
    <h-button type="success" @click="handleClick">按钮点击</h-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        txt: '老牛逼了'
      }
    },
    methods: {
      handleClick(){
        console.log('点击了')
      }
    }
  }
</script>

<style lang="css" scoped>
  div{
    color: red;
  }
</style>