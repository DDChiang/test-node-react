var React = require('react');

var IngredList = React.createClass({
  render: function() {
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
});

module.exports = IngredList;