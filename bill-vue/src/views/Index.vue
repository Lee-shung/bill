<template>
    <div class="index">
        <el-container>
            <el-aside :width="isCollapse?'64px':'260px'"><Aside></Aside></el-aside>
            <el-container>
                <el-header>
                    <Header></Header>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Aside from "../components/Aside";
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "Index",
        data() {
            return {
                a:'ss'
            }
        },
        components: {
            Header,
            Aside
        },
        computed: {
            ...mapState(['isCollapse'])
        },
        mounted() {

        },
    }
</script>

<style scoped lang="stylus">
.index
    height 100%

.el-container
    height 100%
.el-header
    background-color: #545c64;
    color: #333;
    line-height: 60px;

.el-aside
    background-color: #545c64;
    color: #333;
    height 100%
    overflow hidden
    transition width 0.5s
.el-main
    background-color: #f5f5f5;
    color: #333;
    text-align: center;

</style>