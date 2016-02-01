import React, { PropTypes, Component } from 'react';
import Tabs from './Tabs';
import BasicInfoEditor from './CreateRecipe/BasicInfoEditor';
import IngredListEditor from './CreateRecipe/IngredListEditor';
import StepListEditor from './CreateRecipe/StepListEditor';
import QuickFacts from './Recipe/QuickFacts';

const tabData = [
  {name: 'basic info'}, 
  {name: 'ingredients'}, 
  {name: 'steps'}, 
  {name: 'finishing touches'}
];

export default class CreateRecipePage extends Component {
  constructor() {
    super();

    this.state = {
      step: 0
    };

    this.handleNextStep = this.handleNextStep.bind(this);  
    this.handleSwitchTab = this.handleSwitchTab.bind(this);
  }

  handleCancel() {
    alert('cancel!');
  }

  handleNextStep() {
    // TODO: validate if steps haven't been unlocked yet!!!!! 
    var currStep = this.state.step + 1;
    this.setState({step: currStep});
    console.log(currStep);
  }

  handleSave() {
    alert('save and publish!');
  }

  handleSwitchTab(e) {
    // TODO: if step is unlocked? i.e. don't let them move on if name input not filled???
    // orr... just don't allow them to publish. warn user that recipe cannot publish. can only save draft 

    // TODO: validate if steps haven't been unlocked yet!!!!! 
    this.setState({step: e.target.getAttribute("data-id")});
  }

  render() {

    let tabContent = [
      <BasicInfoEditor/>,
      <IngredListEditor/>,
      <StepListEditor/>, 
      <QuickFacts/>
    ];

    // TODO: serve diff buttons based on which step
    let defaultActionBttn = (
      <button onClick={this.handleNextStep}>next</button>
    );

    if (this.state.step == (tabData.length - 1) ) {
      defaultActionBttn = (
        <button onClick={this.handleSave}>save and publish</button>
      );
    }

  	return (
  		<div className="createRecipe" >
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
};
