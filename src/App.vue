<template>
  <div id="app">
    <v-header />
    <router-view />
  </div>
</template>

<script>
  import './common/fonts/iconfont.css'
  import './common/style/normalize.css'
  import header from './components/header/Header.vue'
  export default {
    name: 'App',
    components: {
      "v-header": header,
    },
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
