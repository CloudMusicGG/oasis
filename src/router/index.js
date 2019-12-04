/*
<<<<<<< HEAD
 * @Author: roselee
 * @Date: 2019-12-02 17:21:46
 * @LastEditors: roselee
 * @LastEditTime: 2019-12-04 17:06:35
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import message from '@/pages/message'
import mine from '@/pages/mine'
import upDateInfo from '@/pages/upDateInfo'
import Search from '@/pages/Search-page'
import Hedopage from '@/pages/Hedo-page'
import Recommend from '@/pages/Recommend'
import Article from '@/pages/Article'
import loginPage from '@/components/loginPage/loginPage'
import regAndLogin from '@/components/goLoginPage/regAndLogin'
=======
 * @Author: your name
 * @Date: 2019-11-26 11:44:48
 * @LastEditTime: 2019-12-01 15:47:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day23e:\三阶段\第三阶段\workspace\oasis\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/pages/homepage'
import commentpage from '@/pages/commentpage'
>>>>>>> liberty

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      redirect:"/Recommend",
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
      component: regAndLogin
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage
      // beforeEnter(to,from,next){
      //   if(localStorage.getItem("userinfo")){
      //     next("/");
      //   }else{
      //     next("/regAndLogin");
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
      path: '/Search-page',
      name: 'Search',
      component: Search
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
      component: Article
=======
      name: 'homepage',
      component: homepage
    },
    {
      path: '/commentpage',
      name: 'commentpage',
      component: commentpage
>>>>>>> liberty
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