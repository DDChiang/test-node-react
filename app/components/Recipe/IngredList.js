var React = require('react');

var IngredList = React.createClass({
  render: function() {
  	return (
  		<div className="ingredList">
  			<h1>Ingredients</h1>
  			<ul>
		        <li className="ingred">2 carrots</li>
		        <li className="ingred">2 carrots</li>
		        <li className="ingred">2 carrots</li>
		        <li className="ingred">2 carrots</li>
		    </ul>
  		</div>
	    
    );
  }
});

module.exports = IngredList;