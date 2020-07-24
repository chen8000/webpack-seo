<!--
 * @Date: 2020-07-19 01:58:30
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-07-24 15:11:17
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

<style lang="scss" scoped>

</style>