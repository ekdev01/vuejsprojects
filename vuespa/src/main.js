import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from './UserList.vue';
import UserDetails from './UserDetails.vue';

import App from './App.vue'


Vue.use(VueRouter);

// Nos routes
const routes = [
  { path: '/', redirect: '/users'}, // http://localhost:8082/
  { path: '/users', component: UserList}, // http://localhost:8082/users
  { path: '/users/:id', component: UserDetails} // http://localhost:8082/users/1
];

// La Variable router pour gerer l'ensemble des routes
const router = new VueRouter({
  routes // equivaut a routes:routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
