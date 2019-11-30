/*
 * @Author: Eternal
 * @Date: 2019-11-26 11:44:11
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-30 19:46:52
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-30 16:24:50
 * @Author: roselee
 * @Date: 2019-11-26 10:25:50
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-27 20:34:07
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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recommend',
      component:  Recommend,
      component: Recommend
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
      {
        path: '/mine',
        name: 'mine',
        component: mine
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
      path:'/Article/:pid',
      name:'Article',
      component:Article
    }
  ]
})
