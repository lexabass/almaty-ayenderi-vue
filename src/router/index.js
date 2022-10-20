import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main'
import About from '@/views/About'
import Contacts from '@/views/Contacts'
import Events from '@/views/Events'
import News from '@/views/News'
import Organizators from '@/views/Organizators'
import Viewers from '@/views/Viewers'
import TempEvent from '@/views/TempEvent'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contacts',
    component: Contacts
  },
  {
    path: '/events',
    component: Events
  },
  {
    path: '/tempevent',
    component: TempEvent
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/organizators',
    component: Organizators
  },
  {
    path: '/viewers',
    component: Viewers
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
