/*
 * @Author: roselee
 * @Date: 2019-11-26 10:25:50
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-27 20:34:07
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
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
