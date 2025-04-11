import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listBook',
      component: () => import('../views/ListBook.vue'),
    },
    {
      path: '/book/add',
      name: 'addBook',
      component: () => import('../views/AddBook.vue'),
    },
    {
      path: '/book/detil/:id',
      name: 'detailBook',
      component: () => import('../views/DetailBook.vue'),
    },
    {
      path: '/book/edit/:id',
      name: 'editBook',
      component: () => import('../views/UpdateBook.vue'),
    },
    {
      path: '/book/delete/:id',
      name: 'deleteBook',
    },
  ],
})

export default router
