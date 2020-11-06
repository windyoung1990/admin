import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/components/Layout"
import Login from '../pages/login/Login';
import Index from '../pages/index/Index';
import Show from '../pages/show/Show';

import NotFound from '../pages/notFound/NotFound';
Vue.use(Router)
const routes = [
    {
      path: '/',
      component: Layout,
      name: Layout.name,
    },
    {
      path: '/admin',
      component: Layout,
      name: Layout.name,
      children: [
        {
          path: 'index',
          component: Index,
          name: Index.name,
        }   
      ]
    },
    {
      path: '/show',
      component: Layout,
      name: Layout.name,
      children: [
        {
          path: 'index2',
          component: Show,
          name: Show.name,
        }   
      ]
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
console.log(routes)
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
 console.log(router) 
export default router