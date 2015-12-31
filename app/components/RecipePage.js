var React = require('react');
var ReactDOM = require('react-dom');
var Steps = require('./Recipe/Steps');
var IngredList = require('./Recipe/IngredList');
var RecipeStore = require('../Stores/RecipeStore');
var RecipeActionCreator = require('../creators/RecipeActionCreator');
//edit stuff
var IngredListEditor = require('./CreateRecipe/IngredListEditor');
var StepListEditor = require('./CreateRecipe/StepListEditor');

var RecipePage = React.createClass({
  getInitialState: function() {
    return ({
      recipeData: RecipeStore.getRecipe(),
      editState: false
    });
  },
  componentDidMount: function() {
    RecipeStore.addChangeListener(this._onChange);
    RecipeActionCreator.getRecipe();
  },
  _onChange: function() {
    // does this work?
    this.setState({recipeData: RecipeStore.getRecipe()});
  },
  render: function() {
    // mock cache ingred data
    var ingredCache = ['carrot', 'apple', 'kale'];

    // TODO: only show button if user viewing recipe is 1. logged in + 2. recipe belongs to user
    var editRecipeBttn = (<a href="/test" className="btn">Edit Recipe</a>);
    
    // check if recipeData returns correctly
    if (this.state.recipeData) {
      return (
        <div>
          {editRecipeBttn}
          <h1>{this.state.recipeData.name}</h1>
          <IngredList ref="ingredList" ingredData={this.state.recipeData.ingreds} />
          <Steps ref="steps" stepsData={this.state.recipeData.steps} ingredCache={ingredCache}/>
        </div>  
      );
    } else {
      // TODO: return message only if really can't return recipe data. "asynchronous"
      return (
        <div>Sorry, we could not fish up the recipe</div>
      );
    }
  }
});

module.exports = RecipePage;
