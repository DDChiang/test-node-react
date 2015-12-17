var AppConstants = require('../constants/AppConstants');
var RecipeConstants = require('../constants/RecipeConstants');
var AppDispatcher = require('../dispatchers/AppDispatcher');
var Store = require('./Store');
var assign = require('react/lib/Object.assign');
var _ = require('lodash');
var ActionTypes = RecipeConstants.ActionTypes;

// initial data set
var ingredList = [
  {
  	ID: 1,
 	name: 'carrot' 
  },
  {
  	ID: 2,
 	name: 'apple' 
  },
  {
  	ID: 3,
 	name: 'kale' 
  },
  {
  	ID: 4,
 	name: 'cheese' 
  },
];

// create clone of ingred list (user can mess w this b4 saving)
var cloneIngredList = _.clone(ingredList);

var RecipeStore = assign(new Store(), {
  getRecipeIngreds: function() {
  	return cloneIngredList;
  },
  getRecipeSteps: function() {
  	return ingredSteps;
  }
});

RecipeStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.GET_RECIPE_INGREDS:
      RecipeStore.getRecipeIngreds();
      break;
    case ActionTypes.GET_RECIPE_STEPS:
      RecipeStore.getRecipeSteps();
      break;
    default:
  }
	RecipeStore.emitChange();
});

module.exports = RecipeStore;