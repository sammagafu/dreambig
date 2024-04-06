import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/timber',
      name: 'timber',
      component: () => import('../views/services/Timber.vue')
    },

    {
      path: '/hardware',
      name: 'hardware',
      component: () => import('../views/services/Hardware.vue')
    },

    {
      path: '/furniture',
      name: 'furniture',
      component: () => import('../views/services/Furniture.vue')
    },

    {
      path: '/essentials',
      name: 'essentials',
      component: () => import('../views/services/Essentials.vue')
    },
  ]
})

export default router
