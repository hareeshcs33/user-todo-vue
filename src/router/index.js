import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home.vue'
import TodoLayout from '../components/todo-layout.vue'


Vue.use(Router)



export default new Router({
  mode: "history",
  routes: [
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: about
    // },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'todo-layout',
      component: TodoLayout
    },
  ]
})
