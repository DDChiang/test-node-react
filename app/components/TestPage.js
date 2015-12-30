var React = require('react');
var Tabs = require('./Tabs');
var IngredListEditor = require('./CreateRecipe/IngredListEditor');
var StepListEditor = require('./CreateRecipe/StepListEditor');
var QuickFacts = require('./Recipe/QuickFacts');

var TestPage = React.createClass({
  getInitialState: function() {
    return ({step: 0});
  },
  handleCancel: function() {
    alert('cancel!');
  },
  handleSave:function() {
    alert('save!');
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
      <IngredListEditor/>,
      <QuickFacts/>
    ];

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
