<template>
    <div>
        <div class="left">
            <div class="detail-info">
                <span>{{start}}-{{end}}条</span>
                <span>共{{totalCount}}条</span>
            </div>
            <el-select v-model="pageSize" @change="pageSizeChange">
                <el-option v-for="item in pageSizesObj"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value"></el-option>
            </el-select>
        </div>
        <div class="right">
            <div class="page-index">
                {{pageIndex}}<span>/{{pageTotal}}</span>
            </div>
            <div class="page-btn">
                <el-button :class="{'disabled': pageIndex === 1}" @click="pageIndex = 1"><i class="iconfont icon-page_first"></i></el-button>
                <el-button :class="{'disabled': pageIndex === 1}" @click="pagePre()">
                    <i class="iconfont icon-arrow-left"></i>上一页
                </el-button>
                <el-button :class="{'disabled': pageIndex === pageTotal}" @click="pageNext()">
                    下一页<i class="iconfont icon-arrow-right"></i>
                </el-button>
                <el-button :class="{'disabled': pageIndex === pageTotal}" @click="pageIndex = pageTotal"><i class="iconfont icon-page_last"></i></el-button>
            </div>
            <div class="jumper">
                <span>跳至</span>
                <el-input-number type="number" v-model="jumpIndex"
                                 :min="1"
                                 :max="pageTotalk">
                </el-input-number>
                <el-button type="success" @click="pageIndex = jumpIndex">跳转</el-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            totalCount: {
                type: Number,
                default: 0
            },
            pageSizes: {
                type: Array,
                default: [10, 20, 30]
            },
            pageSize: {
                type: Number,
                default: 1
            },
            pageIndex: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {

            }
        },
        computed:{
            pageSizesObj() {
                return this.pageSizes.map((item) => {
                    return {
                        value: item,
                        label: item + '条/页'
                    };
                })
            },
            start() {
                if(this.totalCount) {
                    return this.pageIndex * this.pageSize + 1;
                }
            },
            end() {

            }
        },
        methods:{

        }
    }
</script>
