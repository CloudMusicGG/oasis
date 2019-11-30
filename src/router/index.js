import Vue from 'vue'
import Router from 'vue-router'
import message from '@/pages/message'
import mine from '@/pages/mine'
import upDateInfo from '@/pages/upDateInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/message',
      name: 'message',
      component: message
    },
      {
        path: '/',
        name: 'mine',
        component: mine
      },
    {
      path: '/upDateInfo',
      // path: '/',
      name: 'upDateInfo',
      component: upDateInfo
    }
  ]
})
