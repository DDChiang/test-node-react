// editable field for recipe "list" components ie "ingredients" + "steps"
// specify 'handleEditItem' + 'handleDeleteItem' methods
// specifiy 'placeholderVal' + 'refVal' props

import React, { PropTypes, Component } from 'react';

export default class IngredItemField extends Component {
  render() {
    var fieldIndex = 0;

    if (this.props.index)
        fieldIndex = this.props.index;

    var indexOrder = fieldIndex + 1 + '.';
    

  	return (
      <li>
        <span className="order">{indexOrder}</span>
        <input ref={this.props.refVal} type="text" placeholder={this.props.placeholderVal} 
          data-id={fieldIndex}
          value={this.props.itemData} onChange={this.props.handleEditItem} />
        <a href="#" data-id={this.props.index} onClick={this.props.handleDeleteItem}>-</a>
      </li>
    );
  }
};
