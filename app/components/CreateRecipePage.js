var React = require('react');
var Tabs = require('./Tabs');
var IngredListEditor = require('./CreateRecipe/IngredListEditor');
var StepListEditor = require('./CreateRecipe/StepListEditor');

var CreateRecipePage = React.createClass({
  getInitialState: function() {
    return ({step: 0});
  },
  render: function() {
    var tabData = [
      {name: 'basic info'}, 
      {name: 'ingredients'}, 
      {name: 'steps'}, 
      {name: 'quick facts'}
    ];
    
    var tabContent = [
      <IngredListEditor/>, 
      <StepListEditor/>, 
      <IngredListEditor/>
    ];
    // TODO:  tab component
      // tab component that redirects you thru steps
  	return (
  		<div className="createRecipe">
        <Tabs tabData={tabData} tabContent={tabContent} stepOrder={true}/>
  		</div>
    );
  }
});

module.exports = CreateRecipePage;