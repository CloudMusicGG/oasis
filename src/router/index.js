
import Vue from 'vue'
import Router from 'vue-router'
import message from '@/pages/message'
import mine from '@/pages/mine'
import upDateInfo from '@/pages/upDateInfo'
import newFocus from '@/pages/newFocus'
import newPraises from '@/pages/newPraises'
import Search from '@/pages/Search-page'
import Hedopage from '@/pages/Hedo-page'
import Recommend from '@/pages/Recommend'
import Article from '@/pages/Article'
import post from '@/pages/post'
import loginPage from '@/components/loginPage/loginPage'
import regAndLogin from '@/components/goLoginPage/regAndLogin'
import homepage from '@/pages/homepage'
import commentpage from '@/pages/commentpage'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      redirect:"/homepage",
      // meta: {
      //   requireLogin: true
      // }
    },
    {
      path: '/Recommend',
      name: 'Recommend',
      component: Recommend,
      // meta: {
      //   requireLogin: true
      // }
    },
    {
      path: '/regAndLogin',
      name: 'regAndLogin',
      component: regAndLogin
    },
    {
      path: '/post',
      name: 'post',
      component: post
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage,
      // beforeEnter(to,from,next){
      //   if(localStorage.getItem("userinfo")){
      //     next("/");
      //   }else{
      //     next();
      //   }
      // }
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      // meta: {
      //   requireLogin: true
      // }
    },
    {
      path: '/upDateInfo',
      name: 'upDateInfo',
      component: upDateInfo
    },
    {
      path: '/newFocus',
      name: 'newFocus',
      component: newFocus
    },
    {
      path: '/newPraises',
      name: 'newPraises',
      component: newPraises
    },
    {
      path: '/Search-page',
      name: 'Search',
      component: Search,
      props:true
    },
    {
      path: '/Search-page/:a',
      name: 'SearchData',
      component: Search,
      props:true
    },
    {
      path: '/Hedo-page',
      name: 'Hedopage',
      component: Hedopage
    },
    {
      path: '/Recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/Article/:pid',
      name: 'Article',
      component: Article,
      name: 'homepage',
      component: homepage
    },
    {
      path: '/commentpage',
      name: 'commentpage',
      component: commentpage
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin) {
    if (!localStorage.getItem('userinfo')) {
      next('/regAndLogin');
    }else{
      next();
    }
  } else {
    next();
  }
})

export default router;