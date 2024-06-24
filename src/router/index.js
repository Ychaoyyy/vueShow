import { createRouter, createWebHistory } from "vue-router";
// import routes from './routes'
const router = createRouter({
  history: createWebHistory(),
  // routes
  routes: [
    {
      path: "/products",
      component: () => import('../views/products.vue'),
      // redirect: '/products',
      // children: routes
    },
    {
      path: "/schedules",
      component: () => import('../views/Schedules.vue'),
    }
  ]
})
export default router