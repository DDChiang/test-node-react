var React = require('react');
var IngredItemField = require('./IngredItemField');
var RecipeStore = require('../../Stores/RecipeStore');
var RecipeActionCreator = require('../../creators/RecipeActionCreator');

var IngredListEditor = React.createClass({
  getInitialState: function() {
    var numIngred = RecipeStore.getRecipeIngreds().length
    return {
      ingredData: RecipeStore.getRecipeIngreds(),
      numIngred: numIngred
    };
  },
  componentDidMount: function() {
    RecipeStore.addChangeListener(this._onChange);
  },
  addItem: function() {
    var newItemIndex = this.state.numIngred + 1; // temp index of new item
    var newItems = this.state.ingredData.concat({ID: newItemIndex, name: ''});
    //remap children ingred
    this.setState({
      ingredData: newItems,
      numIngred: newItemIndex
    });
    //TODO: add to clone ingreds
    console.log('adding Item');

  },
  _onChange: function() {
    this.setState({
      ingredData: RecipeStore.getRecipeIngreds()
    });
  },
  render: function() {
    var ingredItems = ( <IngredItemField /> );
    
    if (this.state.ingredData) {
      ingredItems = this.state.ingredData.map(function(item, i) {
        return (
          <IngredItemField key={i} itemData={item}/>
        );
      });
    }

  	return (
  		<form>
  			<h1>Steps:</h1>
  			<ul ref="list" >
           {ingredItems}
		    </ul>
        <a href="#" value="addItem" onClick={this.addItem} >Add Ingredient</a>
  		</form>
    );
  }
});

module.exports = IngredListEditor;