import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from 'components/pages/Login';
import ForgotPassword from 'components/pages/ForgotPassword';
import './scss/login.scss';

const router = new VueRouter({
    routes: [
        { path: '/', component: Login, props: { title: 'Log in'} },
        { path: '/reset-password', component: ForgotPassword, props: { title: 'Reset password'} }
    ]  
});

const app = new Vue({
  router,
  el: '#render',
    template: '<router-view></router-view>',
    router
});

