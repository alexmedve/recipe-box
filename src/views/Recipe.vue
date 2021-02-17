<template>
  <div class="recipe container">
    <div class="recipe__title">
      {{recipe.name}}
    </div>
    <div class="recipe__text">
      {{recipe.text}}
    </div>
    <div class="recipe__subtitle">
      Ingredients
    </div>
    <ul class="recipe__ingredients">
      <li class="recipe__ingredient" v-for="(ingredient, i) in recipe.ingredients" :key="i">
        {{ingredient}}
      </li>
    </ul>
    <div class="recipe__subtitle">
      How to cook
    </div>
    <ol class="recipe__steps">
      <li class="recipe__step" v-for="(step, i) in recipe.steps" :key="i">
        {{step}}
      </li>
    </ol>
    <div class="recipe__buttons">
      <Button name="Edit" @click.native="$router.push(`/edit/${recipe.slug}`)"/>
      <Button name="Delete" @click.native="destroyRecipe"/>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';
  import Button from '@/components/Button';

  export default {
    components: {
      Button
    },
    data() {
      return {
        ingredients: [
          'garlic',
          'cucumber'
        ]
      }
    },
    computed: {
      ...mapGetters({
        recipes: "recipes/recipes",
        currentRecipeId: "recipes/currentRecipeId"
      }),
      recipe() {
        var result = null;
        for(let i=0; i<this.recipes.length; i++)
          if(this.recipes[i].slug == this.$route.params.slug)
          {
            result = this.recipes[i];
            this.setRecipeId(i);
          }
        return result;
      }
    },
    methods: {
      ...mapActions({
        setRecipeId: 'recipes/setRecipeId',
        deleteRecipe: 'recipes/deleteRecipe'
      }),
      destroyRecipe() {
        this.deleteRecipe(this.currentRecipeId);
        this.$router.push('/');
      }
    },
    mounted() {
      // console.log(this.$route.params.slug);
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

    &__buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      
      & > :first-child {
        margin-right: 10px;
      }

      & > * {
        display: inline-block;
      }
    }
  }
</style>