import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductDetailsView from '@/views/ProductDetailsView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetailsView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
