import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'localhost %'
    }
  },
  {
    path: '/experiments',
    name: 'Experiments',
    component: () => import('../views/Experiments.vue'),
    meta: {
      title: 'localhost % - experiments'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
    meta: {
      title: 'localhost % - projects'
    }
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('../views/Work.vue'),
    meta: {
      title: 'localhost % - work'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: 'localhost % - contact'
    }
  },
];




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el: any) => el.parentNode.removeChild(el));

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags
    .map((tagDef: any) => {
      const tag: HTMLMetaElement = document.createElement('meta');
      Object.keys(tagDef).forEach((key: any) => {
        tag.setAttribute(key, tagDef[key]);
      });
      tag.setAttribute('data-vue-router-controlled', '');
      return tag;
    })
    .forEach((tag: HTMLMetaElement) => document.head.appendChild(tag));

  next();
});


export default router
