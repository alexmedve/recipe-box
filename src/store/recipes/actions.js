export default {
    addRecipe({commit}, recipe) {
        commit('ADD_RECIPE', recipe);
    },
    editRecipe({commit}, recipe, recipdeId) {
        commit('EDDIT_RECIPE', recipe, recipdeId);
    },
    deleteRecipe({commit}, recipeId) {
        commit('DELETE_RECIPE', recipeId);
    }
}