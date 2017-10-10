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
        if (this.$route.path === '/') {
            this.$router.replace('report');
        }
    }
};
</script>

<style>
    @import "assets/main.scss";
</style>
