<template>
    <div class="app-wrapper">
        <nav-bar />
        <side-bar />
        <div class="main-container">
            <section class="app-main">
                <transition
                    name="fade"
                    mode="out-in">
                    <router-view />
                </transition>
            </section>
        </div>
    </div>
</template>
<script>
import NavBar from './NavBar';
import SideBar from './SideBar';

export default {
    name: 'Layout',
    components: {
        NavBar,
        SideBar

    },
}
</script>
<style scoped>
.main-container {
    margin-top: 60px;
    margin-left: 200px;
}
.main-container {
    /* min-height: 100vh; */
    max-height: calc(100vh - 60px);
    transition: margin-left 0.28s;
    overflow-y: auto;
}
.app-main {
    /* margin-left: 200px;
    margin-top: 60px; */
    background: #f5f5f5;
}

</style>