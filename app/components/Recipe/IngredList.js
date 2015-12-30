var React = require('react');

var IngredList = React.createClass({
  render: function() {
    var ingredList = this.props.ingredData.map(function(item, i) {
      return (<li key={i} className="ingred">{item}</li>);
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