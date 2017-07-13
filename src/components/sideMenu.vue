<template>
    <div class="side-menu">
        <ul>
            <li v-for="item in items">{{item}}</li>
        </ul>
        <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
        <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
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
