<template>
        <el-row class="nav-row nav-contaner">
            <el-col :span="12" class="nav-item sys-name">
                系统名称
            </el-col>
            <el-col :span="12" class="nav-item">
                <el-menu 
                    class="navbar"
                    mode="horizontal"
                    background-color="#222">
                        <div class="user-profile-container">
                            <div class="user-profile-content">
                                <el-dropdown>
                                    <div class="user-profile-body">
                                    <!-- <img
                                        class="user-avatar"
                                        src="../assets/imgs/default_head.png"
                                    > -->
                                    <span class="user-name">Hi:{{userName || '小美'}}</span>
                                    </div>
                                    <el-dropdown-menu
                                    slot="dropdown"
                                    class="user-dropdown"
                                    >
                                    <router-link to="/">
                                        <el-dropdown-item>我的主页</el-dropdown-item>
                                    </router-link>
                                    <el-dropdown-item>
                                        <span
                                        style="display:block;"
                                        @click="logout"
                                        >退出</span>
                                    </el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </div>
                </el-menu>
            </el-col>
        </el-row>
    <!-- <el-container class="nav-contaner">
    </el-container> -->
</template>
<script>
export default {
    name: 'NavBar',
    data() {
        return {
            userName: ''
        }
    },
    methods: {
        logout() {

        }
    }
}
</script>
<style scoped>
    .nav-contaner {
        height: 60px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    .sys-name {
        font-size: 30px;
        color: #fff;
    }
    .nav-row {
        width: 100%;
    }
    .navbar {
        border: none;
    }
    .user-profile-content {
        float: right;
        height: 60px;
    }
    .nav-item {
        padding: 0 20px;
        height: 60px;
        line-height: 60px;
        background: #222;
    }
</style>