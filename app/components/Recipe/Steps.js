var React = require('react');

var RecipeSteps = React.createClass({
  render: function() {
  	return (
  		<div className="steps">
  			<h1>Steps:</h1>
  			<ul ref="list" >
		        <li className="step">Carrot There is a carrot, apple, carrotapple, and kale in the carrot.</li>
		        <li className="step">Peel the carrot</li>
		        <li className="step">Wash the apples</li>
		        <li className="step">Peel the kale</li>
		    </ul>
  		</div>
    );
  }
});

module.exports = RecipeSteps;