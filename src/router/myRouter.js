import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'

Vue.use(VueRouter)

//路由从上往下依次匹配
const routes = [
  //静态路由方式，会一次性打包所有路由指定的组件成一个大的js文件，性能较差
  {
    path: '/',
    name: 'home',
    component: HomeView,
    //嵌套子路由,子路由的组件内容是在父路由的  <router-view></router-view>标签显示
    children: [
      {
        path: '/c/c1' ,
        component: () => import('../views/children/ChildView1.vue')
      },
      {
        path: '/c/c2',
        component: () => import('../views/children/ChildView2.vue')
      },
      {
        path: '/c/c3',
        component: () => import('../views/children/ChildView3.vue')
      }
    ]
  },
  //动态路由，按需加载，路由到哪个组件就加载哪个组件，没有路由到的组件就不加载，推荐使用
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    
  },

  {
    path: '/404',
    name: '404',
    component: () => import('../views/404View.vue')
  },
  //重定向,未知路由跳到404
  {
    path: '*',
    name: '未匹配到的路由走到这里',
    redirect:'/404'
  }
]

const router = new VueRouter({
  routes
})

//重置路由
export const resetRouter = function(){
  router.matcher = new VueRouter({routes});
}
export default router
