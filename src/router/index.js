import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Test1 from '../views/Test1.vue'
import Test2 from '../views/Test2.vue'

Vue.use(Router)

export default new Router({
  //使用history模式进行路由
   mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      hidden:true
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      hidden:true
    },
    {
      path: '/home',
      name: '文章管理',
      component: Home,
      children:[
        {
          path: '/test1',
          name: '文章列表',
          component: Test1
        },
        {
          path: '/test2',
          name: '发布文章',
          component: Test2
        }
      ]
    },
    {
      path: '/home',
      name: '用户管理',
      component: Home,
      children:[
        {
          path: '/test1',
          name: '文章列表',
          component: Test1
        },
        {
          path: '/test2',
          name: '发布文章',
          component: Test2
        }
      ]
    },
    {
      path: '/home',
      name: '栏目管理',
      component: Home,
      children:[
        {
          path: '/test1',
          name: '文章列表',
          component: Test1
        },
        {
          path: '/test2',
          name: '发布文章',
          component: Test2
        }
      ]
    },
    {
      path: '/home',
      name: '统计管理',
      component: Home,
      children:[
        {
          path: '/test1',
          name: '文章列表',
          component: Test1
        },
        {
          path: '/test2',
          name: '发布文章',
          component: Test2
        }
      ]
    },
    {
      path: '/home',
      name: '系统管理',
      component: Home,
      children:[
        {
          path: '/test1',
          name: '文章列表',
          component: Test1
        },
        {
          path: '/test2',
          name: '发布文章',
          component: Test2
        }
      ]
    },

  ]
})
