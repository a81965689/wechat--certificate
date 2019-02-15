import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import myinfo from '@/components/myinfo'
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
      title:"绑定手机号"
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