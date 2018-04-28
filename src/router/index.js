import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import AddsList from '@/components/AddsList'
import Login from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'
import SingleAdd from '@/components/SingleAdd'
import AddForm from '@/components/AddForm'
import Page404 from '@/components/Page404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/addsList',
      name: 'AddsList',
      component: AddsList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/single',
      name: 'SingleAdd',
      component: SingleAdd
    },
    {
      path: '/:id(\\d+)',
      name: 'AddForm',
      component: AddForm
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ],
  mode: 'history'
})
