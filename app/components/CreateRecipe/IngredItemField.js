var React = require('react');
var RecipeStore = require('../../Stores/RecipeStore');
var RecipeActionCreator = require('../../creators/RecipeActionCreator');

var IngredItemField = React.createClass({
  getInitialState: function() {
    if (this.props.itemData) {
      return {name: this.props.itemData.name};
    } else {
      return {name: ''}
    }
  },
  handleChange: function(e) {
    this.setState({name: e.target.value});
    // change clone elem val
  },
  deleteItem: function(e) {
    e.preventDefault();
    console.log('deleting ' + this.refs.ingred.id);
    // TODO: find index in clone array
  },
  render: function() {
  	return (
      <li className="ingredField">
        <input ref="ingred" id={this.props.itemData.ID} type="text" placeholder="2 tbsps of cheese" 
          value={this.state.name} onChange={this.handleChange} />
        <a href="#" value="delete" onClick={this.deleteItem}>-</a>
      </li>
    );
  }
});

module.exports = IngredItemField;