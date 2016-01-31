import AppDispatcher from '../dispatchers/AppDispatcher';
import RecipeConstants from '../constants/RecipeConstants';
var ActionTypes = RecipeConstants.ActionTypes;

var RecipeActionCreator = {
  getRecipe: function() {
    var action = {
      type: ActionTypes.GET_RECIPE
    };
    AppDispatcher.dispatch(action);
  },
  getRecipeIngreds: function() {
  	var action = {
  	  type: ActionTypes.GET_RECIPE_INGREDS
  	};
  	AppDispatcher.dispatch(action);
  },
  getRecipeSteps: function() {
  	var action = {
  	  type: ActionTypes.GET_RECIPE_STEPS
  	};
  	AppDispatcher.dispatch(action);
  },
}

export default RecipeActionCreator;
