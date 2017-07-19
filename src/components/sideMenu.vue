<template>
    <div class="side-menu">

    </div>
</template>
<style lang="scss">
    .side-menu {
        position: fixed;
        width: 10%;
        height: 100%;
        background: #ddd;

        ul {
            list-style-type: none;
        }
    }
</style>
<script>
    export default {
        name: 'sideMenu',
        data() {
            return {
                items: [1, 2, 3, 4],
                radio: '1'
            };
        }
    };
</script>
