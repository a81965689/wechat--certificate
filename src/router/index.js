import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import myinfo from '@/components/myinfo'
import detail from '@/components/detail'
Vue.use(Router)

const routes=[
  {
    path: '/',
    name: 'myinfo',
    component: myinfo,
    meta:{
      title:"我的证书"
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta:{
      title:"登录"
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail,
    meta:{
      title:"证书详情"
    }
  }
]
const router = new Router({
  mode:'history',
  routes:routes  
})

router.beforeEach((to,from,next) =>{
  window.scrollTo(0,0)
  if(to.meta.title){
      document.title = to.meta.title
  }
  next()
})

export default router;