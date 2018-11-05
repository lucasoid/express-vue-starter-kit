import Vue from 'vue';
import VueRouter from 'vue-router';
import Entry from 'components/pages/Entry';
import Dashboard from 'components/pages/Dashboard';
import { init } from 'actions/app';
import { store } from 'store';
import './scss/app.scss';

const router = new VueRouter({
    routes: [
        {path: '/', component: Entry},
        { path: '/orgs/:orgId', component: Dashboard }
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