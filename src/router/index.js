/*
 * @Author: Eternal
 * @Date: 2019-11-26 11:44:11
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-26 20:47:42
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/pages/Search-page'
import Hedopage from '@/pages/Hedo-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/Hedo-page',
      name: 'Hedopage',
      component: Hedopage
    }
  ]
})
