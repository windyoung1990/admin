<template>
    <div class="side-bar">
        <el-menu 
             class="sidebar"
            :show-timeout="200"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            mode="vertical">
            <template v-for="(menu, index) in menuList" >
                <router-link
                    :key="index"
                    :index="index"
                    :to="menu.path"
                    v-if="!menu.subMenu">
                    <el-submenu
                        :key="index"
                        :index="menu.index"
                        class="sub-menu"
                    >
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{ menu.title }}</span>
                        </template>

                    </el-submenu>
                </router-link>
                <el-submenu
                    v-else
                    :key="index"
                    :index="menu.index"
                    class="sub-menu"
                    >
                     <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>{{ menu.title }}</span>
                    </template>

                    <template v-for="(submenu, subindex) in menu.subMenu">
                        <router-link :key="subindex" :index="subindex" :to="submenu.path">
                            <el-menu-item :index="submenu.index">{{submenu.title}}</el-menu-item>
                        </router-link>
                    </template>

                </el-submenu>
            </template>

        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'SideBar',
    data() {
        return {
            menuList: []
        }
    },
    mounted() {
        const menuTest = [
            {
                title: '一级标题',
                index: '1',
                subMenu: [
                    {
                        title: '二级标题',
                        path: '',
                        index: '1-1'
                    }
                ]
            },
            {
                title: '一级标题2',
                index: '2',
                path: '',
            }
        ]
        this.menuList = menuTest;
    }
}
</script>
<style scoped>
    .side-bar {
        position: fixed;
        top: 60px;
        left: 0;
        width: 200px;
        bottom: 40px;
        overflow-y: auto;
        z-index: 100;
        background: #545c64;
        box-sizing: border-box;
    }
    .sidebar {
        border: none;
    }
    .sub-menu {
        width: 100%;
    }
</style>