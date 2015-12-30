var React = require('react');
var Tabs = require('./Tabs');
var IngredListEditor = require('./CreateRecipe/IngredListEditor');
var StepListEditor = require('./CreateRecipe/StepListEditor');
var QuickFacts = require('./Recipe/QuickFacts');

var CreateRecipePage = React.createClass({
  getInitialState: function() {
    return ({step: 0});
  },
  handleCancel: function() {
    alert('cancel!');
  },
  handleNextStep:function() {
    // alert('next step!');
    var currStep = this.state.step + 1;
    this.setState({step: currStep});
    console.log(currStep);
  },
  handleSwitchTab: function(e) {
    // if step is unlocked?
    this.setState({step: e.target.getAttribute("data-id")});
  },
  render: function() {
    var tabData = [
      {name: 'basic info'}, 
      {name: 'ingredients'}, 
      {name: 'steps'}, 
      {name: 'finishing touches'}
    ];

    var tabContent = [
      <div>Basic Info.<br></br> Title<br></br>Upload Pic now or later</div>, 
      <IngredListEditor/>,
      <StepListEditor/>, 
      <QuickFacts/>
    ];
    // TODO:  tab component
      // tab component that redirects you thru steps
  	return (
  		<div className="createRecipe">
        <Tabs tabData={tabData} tabContent={tabContent} 
          stepOrder={true} activeTab={this.state.step} 
          handleSwitchTab={this.handleSwitchTab} />
        <button onClick={this.handleCancel}>cancel</button>
        <button onClick={this.handleNextStep}>next</button>
  		</div>
    );
  }
});

module.exports = CreateRecipePage;