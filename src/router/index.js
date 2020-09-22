import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login.vue';
import Index from '../pages/index/Index.vue';
import NotFound from '../pages/notFound/NotFound.vue';
Vue.use(Router)
const routes = [
    {
        path: '/',
        component: Index,
        name: Index.name,
    },
    {
        path: '/login',
        component: Login,
        name: Login.name,
    },
    {
        path: '/404',
        component: NotFound,
        name: NotFound.name,
    },
    {
        path: '*',
        redirect: {
            name: 'NotFound'
        }
    }
]
const router = new Router({
    mode: 'history',
    routes,
  })
  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requireLogin) && !store.getters["user/GET_USER"].userId) {
      router.push({
        path: '/login'
      });
    } else {
      next()
    }
  })
export default router