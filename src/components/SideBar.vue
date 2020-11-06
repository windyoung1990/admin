<template>
    <div class="side-bar">
        <el-menu 
            class="sidebar"
            :show-timeout="200"
            :default-openeds="defaultOpeneds"
            :default-active="defaultActive"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            mode="vertical">
            <template v-for="menu in menuList" >
                <router-link
                    :key="menu.title"
                    :to="menu.path"
                    v-if="!menu.subMenu">
                    <el-menu-item
                        :index="menu.path"
                        class="sub-menu"
                    >
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{ menu.title }}</span>
                        </template>
                    </el-menu-item>
                </router-link>
                <el-submenu
                    v-else
                    :key="menu.title"
                    :index="menu.path"
                    class="sub-menu"
                    >
                     <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>{{ menu.title }}</span>
                    </template>
                    <template v-for="child in menu.subMenu">
                        <router-link :key="child.title" :to="menu.path + child.path">
                            <el-menu-item :index="menu.path + child.path">{{child.title}}</el-menu-item>
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
            menuList: [],
        }
    },
    computed: {
        defaultActive() {
            return this.$route.path
        },
        defaultOpeneds: {
            get() {
                let route = this.$route.path;
                let indexs = route.split('/').slice(1);
                if (indexs.length > 1) {
                    return[`/${indexs[0]}`];
                } else {
                    return [];
                } 
            },
            set(newVal) {
                this.defaultOpeneds = newVal
            }
        }
  },
    mounted() {
        const menuTest = [
            {
                title: '首页',
                path: '/admin',
                index: '1',
                subMenu: [
                    {
                        title: '子首页',
                        path: '/index',
                        index: '1-1'
                    }
                ]
            },
            {
                title: '显示',
                path: '/show',
                index: '2',
                 subMenu: [
                    {
                        title: '显示子页',
                        path: '/index2',
                        index: '2-1'
                    }
                ]
            }
        ]
        this.menuList = menuTest;
    }
}
</script>
<style  scoped>
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
    .side-bar a {
        display: inline-block;
        width: 100%;
    }
    .sidebar {
        border: none;
    }
    .sub-menu {
        width: 100%;
    }
</style>