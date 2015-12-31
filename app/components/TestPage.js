var React = require('react');
var Tabs = require('./Tabs');
var BasicInfoEditor = require('./CreateRecipe/BasicInfoEditor');
var IngredListEditor = require('./CreateRecipe/IngredListEditor');
var StepListEditor = require('./CreateRecipe/StepListEditor');
var QuickFacts = require('./Recipe/QuickFacts');
var RecipeStore = require('../Stores/RecipeStore');
var RecipeActionCreator = require('../creators/RecipeActionCreator');

var tabData = [
  {name: 'basic info'}, 
  {name: 'ingredients'}, 
  {name: 'steps'}, 
  {name: 'quick facts'}
];

var TestPage = React.createClass({
  getInitialState: function() {
    return ({
      step: 0,
      recipeData: RecipeStore.getRecipe(),
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
  handleCancel: function() {
    alert('cancel!');
  },
  handleSave:function() {
    alert('save!');
  },
  render: function() {
    var tabContent = [];

    if (this.state.recipeData) {
      var recipeData = this.state.recipeData;
      tabContent = [
        <BasicInfoEditor nameData={recipeData.name}/>, 
        <StepListEditor stepsData={recipeData.steps}/>, 
        <IngredListEditor ingredData={recipeData.ingreds}/>,
        <QuickFacts/>
      ];
    }
    // show 2 buttons for each: 1. cancel 2. save
  	return (
	   <div className="createRecipe">
      <Tabs tabData={tabData} tabContent={tabContent} activeTab={this.state.step}/>
      <button onClick={this.handleCancel}>cancel</button>
      <button onClick={this.handleSave}>save</button>
	   </div>
    );
  }
});

module.exports = TestPage;
