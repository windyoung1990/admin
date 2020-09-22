<template>
    <div class="main-container">
        <nav-bar />
        <side-bar />

         <transition
          name="fade"
          mode="out-in"
        >
          <router-view />
        </transition>
    </div>
</template>
<script>
import NavBar from './NavBar';
import SideBar from './SideBar';

export default {
    name: 'MainLayout',
    components: {
        NavBar,
        SideBar

    },
}
</script>