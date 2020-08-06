<!--
 * @Date: 2020-07-19 01:58:30
 * @LastEditors: chenzhanghui
 * @LastEditTime: 2020-08-06 15:13:03
--> 
<template>
  <div>
    {{txt}}
    <router-link to="/route">to route page</router-link>
    <input type="text" v-model="val" name="" id="">
    <span>{{val}}</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        txt: '---',
        val: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  div{
    color: red;
  }
</style>