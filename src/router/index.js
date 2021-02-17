import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Recipe from '@/views/Recipe.vue'
import RecipeAction from '@/views/RecipeAction.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipe/:slug',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/new-recipe',
    name: 'NewRecipe',
    component: RecipeAction
  },
  {
    path: '/edit/:slug',
    name: 'EditRecipe',
    component: RecipeAction
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router