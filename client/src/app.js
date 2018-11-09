import Vue from 'vue';
import VueRouter from 'vue-router';
import Entry from 'components/pages/Entry';
import Dashboard from 'components/pages/Dashboard';
import NotFound from 'components/pages/NotFound';
import { init } from 'actions/app';
import { store } from 'store';
import './scss/app.scss';

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {path: '/', component: Entry},
        { path: '/orgs/:orgId', component: Dashboard },
        { path: '/404', component: NotFound },
        { path: '*', component: NotFound }
    ]
});

const app = new Vue({
  router,
  store,
  el: '#render',
    template: '<router-view></router-view>',
    router
});

init();