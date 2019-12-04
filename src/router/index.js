/*
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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/commentpage',
      name: 'commentpage',
      component: commentpage
    }
  ]
})
