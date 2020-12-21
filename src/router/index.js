import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index"
import Details from "../views/Details"
import Login from "../views/Login"
import Modouji from "../views/Modouji"
import Shouchonghu from "../views/Shouchonghu"
Vue.use(VueRouter)

const routes = [
  {
    path:'/shouchonghu',
    component:Shouchonghu
  },
  {
    path:"/modouji",
    component:Modouji
  },
  {
    path:"/login",
    component:Login
  },
  {
    path: '/',
    component: Index
  },
  {
    path: '/details',
    component: Details
    // path:"/details/:lid",
    // component:()=>import(/* webpackChunkName: "details" */'../views/Details.vue'),
    // props:true
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
