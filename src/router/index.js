import Vue from 'vue';
import Router from 'vue-router';
import Home from "../components/Home";
import FormForNewFilm from "../components/FormForNewFilm";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/newnews',
      name: 'newnews',
      component: FormForNewFilm
    },
  ]
})
