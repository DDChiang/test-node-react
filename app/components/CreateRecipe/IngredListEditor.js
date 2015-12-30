var React = require('react');
var IngredItemField = require('./IngredItemField');
var RecipeStore = require('../../Stores/RecipeStore');
var RecipeActionCreator = require('../../creators/RecipeActionCreator');
var _ = require('lodash');

var IngredListEditor = React.createClass({
  getDefaultProps: function() {
    return {
      ingredData: ['','','']
    };
  },
  getInitialState: function() {
    // return {
    //   ingredData: RecipeStore.getRecipeIngreds()
    // };
    return {
      ingredData: this.props.ingredData
    }
  },
  // componentDidMount: function() {
  //   RecipeStore.addChangeListener(this._onChange);
  // },
  editItem: function(e) {
    var tempData = this.state.ingredData;
    tempData[e.target.getAttribute('data-id')] = e.target.value;
    this.setState(tempData);
  },
  deleteItem: function(e) {
    var tempData = this.state.ingredData;

    if (tempData.length === 1) { // replace w empty field
      var ingredLength = tempData.length;
      tempData[ingredLength-1] = '';
    } else { // delete
      tempData.splice([e.target.getAttribute('data-id')], 1);
      this.setState({ingredData: tempData});
    }
  },
  addItem: function(e) {
    e.preventDefault();
    var tempData = this.state.ingredData;
    var ingredLength = tempData.length;

    if ( tempData[ingredLength-1].trim() != '') {
      tempData = tempData.concat('');
      this.setState({ ingredData: tempData });
    } 

  },
  // _onChange: function() {
  //   this.setState({
  //     ingredData: RecipeStore.getRecipeIngreds()
  //   });
  // },
  render: function() {
    var ingredItems = ( <IngredItemField /> );
    
    if (this.state.ingredData) {
      ingredItems = this.state.ingredData.map(function(item, i) {
        return (
          <IngredItemField key={i} index={i} itemData={item} 
            handleEditItem={this.editItem}
            handleDeleteItem={this.deleteItem}/>
        );
      }, this);
    } 

  	return (
  		<form>
  			<h1>Ingredients:</h1>
  			<ul ref="list" >
           {ingredItems}
		    </ul>
        <a href="#" value="addItem" onClick={this.addItem} >Add</a>
  		</form>
    );
  }
});

module.exports = IngredListEditor;