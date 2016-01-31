import React, { PropTypes, Component } from 'react';

export default class IngredList extends Component {
  render() {
    var ingredList = this.props.ingredData.map(function(item, i) {
      var indexOrder = i + 1 + '.';
      return (
        <li key={i} className="ingred">
          <span className="order">{indexOrder}</span>
          {item}
        </li>
      );
    });
    
  	return (
  		<div className="ingredList">
  			<h1>Ingredients</h1>
  			<ul>
		        {ingredList}
		    </ul>
  		</div>
	    
    );
  }
};
