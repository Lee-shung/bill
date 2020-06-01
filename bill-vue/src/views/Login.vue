<template>
    <div class="login">
        <div class="login_form">
            <h2>管理员登录</h2>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input placeholder="用户名" v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="密码" v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
        <footer>
            <p>Copyright © 2020 李无敌.All Rights Reserved  ⋅ 湘ICP备xxxxxxxx号</p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', passwordCheck: true, minlength: 5}
                    ]
                }
            }
        },
        methods: {
            submitForm(user) {
                this.$refs[user].validate((valid) => {
                    if (valid) {
                        //请求后台数据

                        //将用户名和登录状态存进状态管理器

                        //跳转到首页
                        this.$router.push('/index');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style scoped lang="stylus">
.login
    width 100%
    height 100%
    background url("./../assets/img/login-bg.jpg") no-repeat
    background-size 100% 100%
    overflow hidden
    .login_form
        width 500px
        height 340px
        border-radius 14px
        padding 30px 50px
        box-sizing border-box
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        margin auto
        text-align center
        border 1px solid #2798eb
        background #fff
        h2
            color skyblue
    footer
        width 100%
        text-align center
        position absolute
        bottom 0
        color #fff
</style>