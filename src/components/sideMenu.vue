<template>
    <div class="side-menu">
        <el-menu default-active="report" class="el-menu-vertical-demo" :router="true" @select="handleSelect">
            <el-menu-item index="report"><i class="el-icon-menu"></i>报告中心</el-menu-item>
            <el-menu-item index="dashboard"><i class="el-icon-menu"></i>仪表盘</el-menu-item>
            <el-menu-item index="dataSource"><i class="el-icon-setting"></i>数据源</el-menu-item>
        </el-menu>
    </div>
</template>
<style lang="scss">
    .side-menu {
        position: fixed;
        width: 216px;
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
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>
