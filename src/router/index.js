/*
 * @Author: Eternal
 * @Date: 2019-11-26 11:44:11
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-30 15:18:29
 * @Author: roselee
 * @Date: 2019-11-26 10:25:50
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-27 20:34:07
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
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
      component: Recommend
    },
    {
      path: '/Search-page',
      name: 'Search',
      component: Search
    },
    {
      path: '/Hedo-page',
      name: 'Hedopage',
      component: Hedopage},
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
