<!--
 * @Date: 2020-07-19 01:58:30
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-08-06 12:15:44
--> 
<template>
  <div>
    {{txt}}
    <router-link to="/route">to route page</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        txt: '老牛逼了'
      }
    }
  }
</script>

<style lang="css" scoped>
  div{
    color: red;
  }
</style>