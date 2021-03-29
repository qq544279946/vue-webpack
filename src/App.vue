<template>
  <div id="#app">
      {{msg}},欢迎使用vue
      <button @click="test">点我</button>
  </div>
</template>

<script>
export default {
    methods: {
        test(){
            this.msg = '我好尼玛'
        }
    },
    data(){
        return {
            msg: '你好'
        }
    }
}
</script>

<style>

</style>