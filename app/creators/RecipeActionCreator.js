var AppDispatcher = require('../dispatchers/AppDispatcher');
var RecipeConstants = require('../constants/RecipeConstants');
var ActionTypes = RecipeConstants.ActionTypes;

var RecipeActionCreator = {
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

module.exports = RecipeActionCreator;
