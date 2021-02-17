export default {
    addRecipe({commit}, recipe) {
        commit('ADD_RECIPE', recipe);
    },
    editRecipe({commit}, recipe, recipdeId) {
        commit('EDIT_RECIPE', recipe, recipdeId);
    },
    deleteRecipe({commit}, recipeId) {
        commit('DELETE_RECIPE', recipeId);
    },
    setRecipeId({commit}, id) {
        commit('SET_RECIPE_ID', id);
    }
}