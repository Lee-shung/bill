<template>
    <div class="aside">
        <div class="title">
            <i></i>
            <h1 :style="isCollapse?{opacity:0}:{opacity: 1}">个人收支管理系统</h1>
        </div>
        <div class="menu">
            <el-menu
                    style="border: none"
                    unique-opened="true"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    :collapse="isCollapse"
                    class="el-menu-vertical"
                    router="true"
                    default-active="/bill/data"
                    >
                <el-menu-item index="/bill/data">
                    <template>
                        <i class="el-icon-s-data" style="margin-right: 0;text-align: left"></i>
                        <span slot="title" style="padding-left: 13px;font-size: 18px" >数据统计</span>
                    </template>
                </el-menu-item>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="iconfont icon-shouzhiguanli1"></i>
                        <span class="menu-title">收支管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-submenu index="1-1">
                            <template slot="title">
                                <span class="item-title iconfont icon-shouru1">个人收入管理</span>
                            </template>
                            <el-menu-item index="/bill/incomeList">收入记录列表</el-menu-item>
                            <el-menu-item index="/bill/addIncome">新增收入记录</el-menu-item>
                        </el-submenu>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <el-submenu index="1-2">
                            <template slot="title">
                                <span class="item-title iconfont icon-zhichu1">个人支出管理</span>
                            </template>
                            <el-menu-item index="/bill/consumeList">消费记录列表</el-menu-item>
                            <el-menu-item index="/bill/addConsume">新增消费记录</el-menu-item>
                        </el-submenu>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="iconfont icon-shouzhileixingguanli"></i>
                        <span class="menu-title">收支类型管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-submenu index="2-1">
                            <template slot="title">
                                <span class="item-title iconfont icon-zhichu">消费分类管理</span>
                            </template>
                            <el-menu-item index="/bill/consumeCateList">消费分类列表</el-menu-item>
                            <el-menu-item index="/bill/addConsumeCate">新增消费分类</el-menu-item>
                        </el-submenu>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <el-submenu index="2-2">
                            <template slot="title">
                                <span class="item-title  iconfont icon-shouru">收入分类管理</span>
                            </template>
                            <el-menu-item index="/bill/incomeCateList">收入分类列表</el-menu-item>
                            <el-menu-item index="/bill/addIncomeCate">新增分类记录</el-menu-item>
                        </el-submenu>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Aside",
        computed: {
            ...mapState(['isCollapse'])
        }
    }
</script>

<style scoped lang="stylus">
.aside
    .title
        border-bottom 1px solid #fefefe
        box-sizing border-box
        height 60px
        padding-top 10px
        padding-left 10px
        i
            display inline-block
            width 42px
            height 42px
            background url("./../assets/img/dog.jpg") no-repeat;
            background-size 100% 100%
            margin-right 10px

        h1
            display inline-block
            color #17bdff
            font-size 20px
            vertical-align 12px
    .menu
        .el-submenu
            width 100%
        .item-title
            padding-left 60px
            font-size 16px
        .menu-title
            font-size 18px
            padding-left 20px
        .el-menu-vertical:not(.el-menu--collapse)
            width: 260px;
            min-height: 400px;



.el-submenu
    .el-menu-item
        text-align right
</style>