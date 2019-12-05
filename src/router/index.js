/*
 * @Author: Eternal
 * @Date: 2019-11-26 11:44:11
<<<<<<< HEAD
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-05 19:29:52
=======
 * @LastEditors: Eternal
 * @LastEditTime: 2019-12-05 15:09:11
 * @LastEditors: roselee
 * @LastEditTime: 2019-12-05 09:31:19
>>>>>>> 2b821e24b85afa3fe76e77163aa4d7803426b777
 * @Author: roselee
 * @Date: 2019-12-02 17:21:46
 * @LastEditors: roselee
 * @LastEditTime: 2019-12-05 09:25:45
 * @Description: 
 */
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
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage,
      beforeEnter(to,from,next){
        if(localStorage.getItem("userinfo")){
          next("/");
        }else{
          next();
        }
      }
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
      meta: {
        requireLogin: true
      }
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