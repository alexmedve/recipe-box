export default {
    ADD_RECIPE(state, recipe) {
        state.recipes.push(recipe);
    },
    EDIT_RECIPE(state, recipe, recipeId) {
        state.recipes[recipeId] = recipe;
    },
    DELETE_RECIPE(state, recipeId) {
        state.recipes.splice(recipeId, 1);
    }
}