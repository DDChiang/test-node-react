import AppConstants from '../constants/AppConstants';
import RecipeConstants from '../constants/RecipeConstants';
import AppDispatcher from '../dispatchers/AppDispatcher';
import Store from './Store';
import assign from 'react/lib/Object.assign';
import _ from 'lodash';

let ActionTypes = RecipeConstants.ActionTypes;

let recipeData = false;

// fake recipe data (mock reg recipe page)
let data = {
  name: 'Grandma\'s apple pie',
  quickFacts: [],
  ingreds: [
    '1 apple',
    '2 cups of soylent',
    '1 sprig of rosemary',
    '6 carrots',
    '3 very large leaves of kale'
  ],
  steps: [
    'Carrot There is a carrot, apple, carrotapple, and kale in the carrot.',
    'Peel the carrot',
    'Wash the apples',
    'Peel the kale'
  ]
};

// // create clone of ingred list (user can mess w this b4 saving)
// var cloneIngredList = _.clone(ingredList);

// set recipe data
var setRecipe = function() {
  recipeData = data;
};

// var RecipeStore = assign(new Store(), {
//   getRecipe: function() {
//     return recipeData;
//   },
//   // for ingredListEditor
//   getRecipeIngreds: function() {
//   	return cloneIngredList;
//   },
//   getRecipeSteps: function() {
//   	return ingredSteps;
//   }
// });

// RecipeStore.dispatchToken = AppDispatcher.register(function(action) {
//   switch(action.type) {
//     case ActionTypes.GET_RECIPE: 
//       setRecipe();
//       break;
//     case ActionTypes.GET_RECIPE_INGREDS:
//       RecipeStore.getRecipeIngreds();
//       break;
//     case ActionTypes.GET_RECIPE_STEPS:
//       RecipeStore.getRecipeSteps();
//       break;
//     default:
//   }
//   RecipeStore.emitChange();
// });

// export default RecipeStore;

class RecipeStore extends Store {
  constructor() {
    super();
  }

  getRecipe() {
    return recipeData;
  }
  // for ingredListEditor
  getRecipeIngreds() {
    return cloneIngredList;
  }
  getRecipeSteps() {
    return ingredSteps;
  }
}

// create new instance
let RecipeStoreInstance = new RecipeStore(); 

RecipeStoreInstance.dispatchToken = AppDispatcher.register(action => {
  switch(action.type) {
    case ActionTypes.GET_RECIPE: 
      setRecipe();
      break;
    case ActionTypes.GET_RECIPE_INGREDS:
      RecipeStore.getRecipeIngreds();
      break;
    case ActionTypes.GET_RECIPE_STEPS:
      RecipeStore.getRecipeSteps();
      break;
    default:
  }
  RecipeStoreInstance.emitChange();
});


export default RecipeStoreInstance;