import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/models/Home';
import Seller from '@/models/Seller';
import Cart from '@/models/Cart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/home',
      children: [
        { path: 'home', component: Home, name: '首页' }
      ]
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
  ],
});
