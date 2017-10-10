<template>
  <div id="app">
      <sideMenu></sideMenu>
      <div class="content">
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
    },
    watch: {
        '$route': 'jumpToHome'
    },
    methods: {
        jumpToHome() {
            if (this.$route.path === '/') {
                this.$router.replace('report');
            }
        }
    },
    created() {
        console.log(this.$router, this.$route);
        if (this.$route.path === '/') {
            this.$router.replace('report');
        }
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
    .content {
        background: #ccc;
    }
</style>
