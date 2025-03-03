import Vue from 'vue';
import Router from 'vue-router';
import MapsScreen from '../pages/MapsScreen/MapsScreen.vue'
import Dashboard from '../pages/DashboardScreen/DashboardScreen.vue'

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/mapas',
    name: 'Mapas',
    component: MapsScreen,
  },
];

const router = new Router({
  routes,
  mode: 'history'
});

export default router;
