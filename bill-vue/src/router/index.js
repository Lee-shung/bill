import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import Index from "../views/Index";
//路由懒加载
let Data = () => import('../views/index/Data');
let IncomeList = () => import('../views/index/IncomeList')
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/bill',
    name: 'Index',
    component: Index,
    children:[
      {
        path:"data",
        component: Data
      },
      {
        path: '',
        redirect: 'data'
      },
      {
        path: 'incomeList',
        component: IncomeList
      }
    ]
  },
  {
    path: '/',
    redirect: '/bill'
  }
]

const router = new VueRouter({
  routes
})

export default router
