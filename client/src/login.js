import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from 'store';
import Login from 'components/pages/Login';
import ForgotPassword from 'components/pages/ForgotPassword';
import NotFound from 'components/pages/NotFound';
import './scss/login.scss';

const router = new VueRouter({
    mode: 'history',
    base: '/login',
    routes: [
        { path: '/', component: Login, props: { title: 'Log in'} },
        { path: '/reset-password', component: ForgotPassword, props: { title: 'Reset password'} },
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

