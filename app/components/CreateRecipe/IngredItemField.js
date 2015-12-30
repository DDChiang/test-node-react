var React = require('react');

var IngredItemField = React.createClass({
  render: function() {
  	return (
      <li>
        <input ref="ingred" type="text" placeholder="2 tbsps of cheese" 
          data-id={this.props.index}
          value={this.props.itemData} onChange={this.props.handleEditItem} />
        <a href="#" data-id={this.props.index} onClick={this.props.handleDeleteItem}>-</a>
      </li>
    );
  }
});

module.exports = IngredItemField;