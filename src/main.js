import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Router from './router/index'

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
Router.start(App, 'cov-app')