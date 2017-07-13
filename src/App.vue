<template>
  <div id="app">
      <div>
          <sideMenu></sideMenu>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import sideMenu from './components/sideMenu.vue';

export default {
    name: 'app',
    components: {
        sideMenu
    }
};
</script>

<style>
@import "assets/main.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
