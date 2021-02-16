<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue';

  import {
    mapActions
  } from 'vuex';

  export default {
    components: {
      Navigation
    },
    data() {
      return {
        testRecipes: [{
            name: 'Friptura de urs',
            slug: 'friptura-de-urs',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti totam perferendis incidunt? Distinctio quibusdam quia dolor ipsa nihil quaerat culpa? Suscipit, pariatur fugiat recusandae quasi excepturi quidem quis laudantium.',
            ingredients: [
              'milk',
              'meat',
              'sugar',
              '3 cups of water'
            ],
            steps: [
              'boil water and asdasdsa',
              'season the meat',
              'bon apetite sau cum se scrie'
            ]
          },
          {
            name: 'Turkey dish',
            slug: 'turkey-dish',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti totam perferendis incidunt? Distinctio quibusdam quia dolor ipsa nihil quaerat culpa? Suscipit, pariatur fugiat recusandae quasi excepturi quidem quis laudantium.',
            ingredients: [
              'milk',
              'meat',
              'sugar',
              '3 cups of water'
            ],
            steps: [
              'boil water and asdasdsa',
              'season the meat',
              'bon apetite sau cum se scrie'
            ]
          },
          {
            name: 'Piure cu cartofi',
            slug: 'piure-cu-cartofi',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti totam perferendis incidunt? Distinctio quibusdam quia dolor ipsa nihil quaerat culpa? Suscipit, pariatur fugiat recusandae quasi excepturi quidem quis laudantium.',
            ingredients: [
              'milk',
              'meat',
              'sugar',
              '3 cups of water'
            ],
            steps: [
              'boil water and asdasdsa',
              'season the meat',
              'bon apetite sau cum se scrie'
            ]
          }
        ]
      }
    },
    methods: {
      ...mapActions({
        addRecipe: "recipes/addRecipe"
      })
    },
    mounted() {
      this.testRecipes.forEach(recipe => {
        this.addRecipe(recipe);
      });
    }
  }
</script>

<style lang="scss">
  * {

    &,
    &::before,
    &::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  }

  html,
  body {
    font-family: 'Work Sans', sans-serif;
    color: $color-white;
    height: 100%;
  }

  body {
    background-color: $color-primary;
    position: relative;
  }

  .container {
    margin: 100px auto;
    padding-bottom: 100px;
    width: calc(100% - 30px);
    max-width: 1200px;
  }
</style>