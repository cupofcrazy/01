import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects/:slug',
    name: 'Project',
    component: () => import(/* webpackChunkName: "project" */'../views/Project.vue'),
    props: true
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */'../views/Projects.vue'),
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import(/* webpackChunkName: "archive" */'../views/Archive.vue'),
  },
  {
    path: '/information',
    name: 'Info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '/404', component: () => import(/* webpackChunkName: "404" */'@/views/404.vue') },  
  { path: '*', redirect: '/404' } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  if (to.name) NProgress.start()
  next()
})
router.afterEach(() => {
  console.log('afterEach')
  NProgress.done()
})

export default router
