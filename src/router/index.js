import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/pages/Register'
import Order from '@/pages/Order'
import ShoppingCart from '@/pages/ShoppingCart'
import Plate from '@/pages/Plate'
import Overview from '@/pages/plate/Overview'
import Commodity from '@/pages/plate/Commodity'
import Pay from '@/pages/plate/Pay'
import Service from '@/pages/Service'
import Question from '@/pages/Question'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },{
      path: '/register',
      component: Register
    },{
      path: '/order',
      component: Order
    },{
      path: '/shoppingCart',
      component: ShoppingCart
    },{
      path: '/plate',
      component: Plate,
      children:[{
        path:'pay',
        component:Pay
      },{
        path:'commodity',
        component:Commodity
      },{
        path:'overview',
        component:Overview
      }]
    },/*{
      path: '/commodity',
      component: Commodity
    },*//*{
      path: '/pay',
      component: Pay
    },*/{
      path: '/service',
      component: Service
    },{
      path: '/question',
      component: Question
    }
  ]
})
