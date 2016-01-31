import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import BasicInfo from './Recipe/BasicInfo';
import IngredList from './Recipe/IngredList';
import Steps from './Recipe/Steps';
import RecipeStore from '../stores/RecipeStore';
import RecipeActionCreator from '../creators/RecipeActionCreator';
//edit stuff
import IngredListEditor from './CreateRecipe/IngredListEditor';
import StepListEditor from './CreateRecipe/StepListEditor';

export default class RecipePage extends Component {
  constructor(props) {
    super(props);

    this.state = {  // getInitialState
      recipeData: RecipeStore.getRecipe(),
      editState: false
    };
    // Ops usu carried out in componentWillMount go here
    // Autobind anything that uses "this"

    this._onChange = this._onChange.bind(this);
  }
  // prop initializers

  componentDidMount() {
    console.log('recipe mount');
    RecipeStore.addChangeListener(this._onChange);
    RecipeActionCreator.getRecipe();
  }

  _onChange() {
    // does this work?
    console.log('onchange');
    this.setState({recipeData: RecipeStore.getRecipe()});
  }

  componentWillUnmount() {
    RecipeStore.removeChangeListener(this._onChange);
  }
  
  render() {
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
};
