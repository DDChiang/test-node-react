var React = require('react');

var IngredItemField = React.createClass({
  render: function() {
    console.log(this.props.placeholderVal);
  	return (
      <li>
        <input ref={this.props.refVal} type="text" placeholder={this.props.placeholderVal} 
          data-id={this.props.index}
          value={this.props.itemData} onChange={this.props.handleEditItem} />
        <a href="#" data-id={this.props.index} onClick={this.props.handleDeleteItem}>-</a>
      </li>
    );
  }
});

module.exports = IngredItemField;