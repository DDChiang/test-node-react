// editable field
// specify 'handleEditItem' + 'handleDeleteItem' methods
// specifiy 'placeholderVal' + 'refVal' props

var React = require('react');

var IngredItemField = React.createClass({
  render: function() {
    var indexOrder = this.props.index + 1 + '.';
    
  	return (
      <li>
        <span className="order">{indexOrder}</span>
        <input ref={this.props.refVal} type="text" placeholder={this.props.placeholderVal} 
          data-id={this.props.index}
          value={this.props.itemData} onChange={this.props.handleEditItem} />
        <a href="#" data-id={this.props.index} onClick={this.props.handleDeleteItem}>-</a>
      </li>
    );
  }
});

module.exports = IngredItemField;