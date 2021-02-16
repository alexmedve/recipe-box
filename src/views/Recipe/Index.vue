<template>
  <div class="recipe container">
    <div class="recipe__title">
      Friptura
    </div>
    <div class="recipe__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti totam perferendis incidunt? Distinctio
      quibusdam quia dolor ipsa nihil quaerat culpa? Suscipit, pariatur fugiat recusandae quasi excepturi quidem quis
      laudantium.
    </div>
    <div class="recipe__subtitle">
      Ingredients
    </div>
    <ul class="recipe__ingredients">
      <li class="recipe__ingredient" v-for="(ingredient, i) in ingredients" :key="i">
        {{ingredient}}
      </li>
    </ul>
    <div class="recipe__subtitle">
      How to
    </div>
    <ol class="recipe__steps">
      <li class="recipe__step"></li>
    </ol>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ingredients: [
          'garlic',
          'cucumber'
        ]
      }
    },
    mounted() {
      console.log(this.$route.params.slug);
    }
  }
</script>

<style lang="scss">
  .recipe {

    &__title {
      font-weight: 700;
      font-size: 30px;
      margin-bottom: 25px;
    }

    &__subtitle {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 15px;
    }

    &__text {
      font-size: 20px;
      margin-bottom: 25px;
    }

    &__ingredients,
    &__steps {
      margin-bottom: 25px;
      margin-left: 25px;
    }
  }
</style>