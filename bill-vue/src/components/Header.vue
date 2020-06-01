<template>
    <header style="position: relative" class="clearFloat">
        <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="onCollapse"></i>
        <el-avatar style="position: absolute;top: 12px;right: 136px" size="medium" src="./../assets/img/22.jpg"></el-avatar>
        <div class="admin-info">
            <el-menu
                    mode="horizontal"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-submenu>
                    <template slot="title">管理员名字</template>
                    <el-menu-item>个人中心</el-menu-item>
                    <el-menu-item>退出</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
    </header>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "Header",
        data() {
            return {

            };
        },
        computed: {
            ...mapState(['isCollapse'])
        },
        methods: {
            ...mapActions(['changeCollapse']),
            onCollapse() {
                this.changeCollapse();
            }
        }
    }
</script>

<style scoped lang="stylus">
i
    font-size 24px
    vertical-align -5px
.admin-info
    float right

</style>