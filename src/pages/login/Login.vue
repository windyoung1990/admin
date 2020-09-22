<template>
    <div class="login-box">
        <el-form label-width="80px">
            <el-form-item label="用户名称">
                <el-input v-model="username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="password" placeholder="请输入密码" show-password	></el-input>
            </el-form-item>
            <el-button type="warning" @click="login">登录</el-button>
        </el-form>
    </div>
</template>
<script>
// import http from '@/utils/http';
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    computed: {
        ...mapGetters({
            userInfo: "user/GET_USER"
        })
    },
    mounted() {
        console.log(this.userInfo)
        // this.saveUser({})
    },
    methods: {
        ...mapActions("user",{
            saveUser: 'SAVE_USER'
        }),
        checkLoginParams() {
            if(!this.username) {
                this.$message({
                    message: '请输入用户名',
                    type: 'warning'
                });
                return false;
            }
            if(!this.password) {
                this.$message({
                    message: '请输入密码',
                    type: 'warning'
                });
                return false
            }
            return true;
        },
        login() {
            if (!this.checkLoginParams()) {
                return;
            }
            const params = {
                username: this.username,
                password: this.password
            }
            this.saveUser(params).then(() => {
                console.log(this.userInfo)
            })
        }
    }
}
</script>
<style  scoped>
    .login-box {
        width: 300px;
        height: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
