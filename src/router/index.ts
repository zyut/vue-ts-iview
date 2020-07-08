import Vue from 'vue';
<<<<<<< HEAD
import VueRouter, {RouteConfig} from 'vue-router';
=======
import VueRouter, { RouteConfig } from 'vue-router';
>>>>>>> 5dff251fb9ac173b3338d56433cefb8a5f89a9e0
import Layout from '@/layout/index.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
<<<<<<< HEAD
    {
        path: '/',
        name: 'Home',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
=======
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
>>>>>>> 5dff251fb9ac173b3338d56433cefb8a5f89a9e0
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
