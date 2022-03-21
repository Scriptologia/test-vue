import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Layout from '../views/Layout.vue'
import {useUserStore} from '@/stores/user'
const userStore = useUserStore;

const routes = [
    {path: '',
    component: Layout,
        redirect: 'home',
    children: [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  ]}
]

const router = createRouter({
    linkActiveClass: "active",
    linkExactActiveClass: "active",
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
    const  user = userStore().user
    if(!user || !Object.keys(user).length) {
        if(to.name === 'Login') {
            return next();
        } else {
            return next({name: 'Login'})
        }
    }
    if(to.name === 'Login') {
        return next({name: 'Home'})
    }
    return next();
});

export default router
