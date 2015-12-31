var React = require('react');
var ReactDOM = require('react-dom');
var BasicInfo = require('./Recipe/BasicInfo');
var IngredList = require('./Recipe/IngredList');
var Steps = require('./Recipe/Steps');
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
    
    // TODO use promises with actionCreator. On load ==> loading component. On error ==> return error message 
    // check if recipeData returns correctly
    if (this.state.recipeData) {
      var recipeData = this.state.recipeData;
      return (
        <div>
          {editRecipeBttn}
          <BasicInfo ref="basicInfo" nameData={recipeData.name}/>
          <IngredList ref="ingredList" ingredData={recipeData.ingreds} />
          <Steps ref="steps" stepsData={recipeData.steps} ingredCache={ingredCache}/>
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
