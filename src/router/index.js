import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonsView from '../views/PersonsView.vue'
import ContactView from '../views/ContactView.vue'
import CharacterDetailsView from '../views/CharacterDetailsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/personajes',
    name: 'PersonsView',
    component: PersonsView
  },
  {
    path: '/contacto',
    name: 'ContactView',
    component: ContactView
  },
  {
    path: '/personaje/:id',
    name: 'CharacterDetailsView',
    component: CharacterDetailsView
  },
]

const router = new VueRouter({
  routes
})

export default router
