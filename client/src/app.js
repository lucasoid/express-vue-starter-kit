import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from 'components/pages/Dashboard';
import './scss/app.scss';
import { getUserIdFromToken } from 'utils/accessToken';

const router = new VueRouter({
    routes: [
        { path: '/', component: Dashboard, props: { title: 'Dashboard', userId: getUserIdFromToken()} }
    ]
});

const app = new Vue({
  router,
  el: '#render',
    template: '<router-view></router-view>',
    router
});
