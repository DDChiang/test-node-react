import React, { PropTypes, Component } from 'react';
import Tabs from './Tabs';
import BasicInfoEditor from './CreateRecipe/BasicInfoEditor';
import IngredListEditor from './CreateRecipe/IngredListEditor';
import StepListEditor from './CreateRecipe/StepListEditor';
import QuickFacts from './Recipe/QuickFacts';
import RecipeStore from '../stores/RecipeStore';
import RecipeActionCreator from '../creators/RecipeActionCreator';

const tabData = [
  {name: 'basic info'}, 
  {name: 'ingredients'}, 
  {name: 'steps'}, 
  {name: 'quick facts'}
];

export class TestPage extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      recipeData: RecipeStore.getRecipe(),
    };
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    RecipeStore.addChangeListener(this._onChange);
    RecipeActionCreator.getRecipe();
  }

  _onChange() {
    this.setState({recipeData: RecipeStore.getRecipe()});
  }

  handleCancel() {
    alert('cancel!');
  }

  handleSave() {
    alert('save!');
  }

  componentWillUnmount() {
    RecipeStore.removeChangeListener(this._onChange);
  }

  render() {
    var tabContent = [];

    if (this.state.recipeData) {
      var recipeData = this.state.recipeData;
      tabContent = [
        <BasicInfoEditor nameData={recipeData.name}/>, 
        <IngredListEditor ingredData={recipeData.ingreds}/>,
        <StepListEditor stepsData={recipeData.steps}/>, 
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
};
