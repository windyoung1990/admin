<template>
    <div>
        <router-link :to="{path: '/admin/index'}">toIndex</router-link>
        <router-link :to="{path: '/login'}">toLogin</router-link>
        <transition mode="out-in">
          <keep-alive>
            <router-view :key="key"></router-view>
          </keep-alive>
        </transition>
    </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    key() {
      return this.$route.fullPath
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
