require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
import {routes} from './routes'
import StoreData from './store'
// new
import createPersistedState from "vuex-persistedstate";


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.component('app-component', require('./components/AppComponent.vue').default)
Vue.component('admin-component', require('./components/admin/Admin.vue').default)

const store = new Vuex.Store({
    modules: {
        StoreData
      },
    plugins: [createPersistedState()],
});

const router = new VueRouter({
    routes,
    mode: 'history',
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // need to login
    if(!store.getters.currentUser) {
      next({
        name: "Login",
        query: {redirect: to.fullPath}
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

const app = new Vue({
    el: '#app',
    router,
    store,
});
