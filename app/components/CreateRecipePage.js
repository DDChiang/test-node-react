var React = require('react');
var Tabs = require('./Tabs');
var BasicInfoEditor = require('./CreateRecipe/BasicInfoEditor');
var IngredListEditor = require('./CreateRecipe/IngredListEditor');
var StepListEditor = require('./CreateRecipe/StepListEditor');
var QuickFacts = require('./Recipe/QuickFacts');

var tabData = [
  {name: 'basic info'}, 
  {name: 'ingredients'}, 
  {name: 'steps'}, 
  {name: 'finishing touches'}
];

var CreateRecipePage = React.createClass({
  getInitialState: function() {
    return ({step: 0});
  },
  handleCancel: function() {
    alert('cancel!');
  },
  handleNextStep:function() {
    // TODO: validate if steps haven't been unlocked yet!!!!! 
    var currStep = this.state.step + 1;
    this.setState({step: currStep});
    console.log(currStep);
  },
  handleSave: function() {
    alert('save and publish!');
  },
  handleSwitchTab: function(e) {
    // TODO: if step is unlocked? i.e. don't let them move on if name input not filled???
    // orr... just don't allow them to publish. warn user that recipe cannot publish. can only save draft 

    // TODO: validate if steps haven't been unlocked yet!!!!! 
    this.setState({step: e.target.getAttribute("data-id")});
  },
  render: function() {
    // Tab content
    var tabContent = [
      <BasicInfoEditor/>, 
      <IngredListEditor/>,
      <StepListEditor/>, 
      <QuickFacts/>
    ];

    // TODO: serve diff buttons based on which step
    var defaultActionBttn = (
      <button onClick={this.handleNextStep}>next</button>
    );

    if (this.state.step == (tabData.length - 1) ) {
      defaultActionBttn = (
        <button onClick={this.handleSave}>save and publish</button>
      );
    }

  	return (
  		<div className="createRecipe">
        <Tabs tabData={tabData} tabContent={tabContent} 
          stepOrder={true} activeTab={this.state.step} 
          handleSwitchTab={this.handleSwitchTab} />
        <div className="bttnRow">
          <button onClick={this.handleCancel}>cancel</button>
          {defaultActionBttn}
        </div>
  		</div>
    );
  }
});

module.exports = CreateRecipePage;