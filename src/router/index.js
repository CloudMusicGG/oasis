
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
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/Recommend',
      name: 'Recommend',
      component: Recommend,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/regAndLogin',
      name: 'regAndLogin',
      component: regAndLogin,
      beforeEnter(to,from,next){
        if(localStorage.getItem("userTele")){
          next("/");
        }else{
          next();
        }
      }
    },
    {
      path: '/post',
      name: 'post',
      component: post,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage,
      beforeEnter(to,from,next){
        if(localStorage.getItem("userTele")){
          next("/");
        }else{
          next();
        }
      }
    },
    {
      path: '/message',
      name: 'message',
      component: message,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/upDateInfo',
      name: 'upDateInfo',
      component: upDateInfo,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/newFocus',
      name: 'newFocus',
      component: newFocus,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/newPraises',
      name: 'newPraises',
      component: newPraises,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/Search-page',
      name: 'Search',
      component: Search,
      props:true,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/Search-page/:a',
      name: 'SearchData',
      component: Search,
      props:true,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/Hedo-page',
      name: 'Hedopage',
      component: Hedopage,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/Article/:pid',
      name: 'Article',
      component: Article,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/commentpage',
      name: 'commentpage',
      component: commentpage,
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage,
      meta: {
        requireLogin: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin) {
    if (!localStorage.getItem('userTele')) {
      next('/regAndLogin');
    }else{
      next();
    }
  } else {
    next();
  }
})

export default router;