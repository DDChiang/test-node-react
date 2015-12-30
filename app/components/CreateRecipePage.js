var React = require('react');
var IngredListEditor = require('./CreateRecipe/IngredListEditor');

var CreateRecipePage = React.createClass({
  getInitialState: function() {
    return ({editState: false});
  },
  render: function() {
  	return (
  		<div className="createRecipe">
  			<div className="ingredListEditor">
  				<IngredListEditor />
  			</div>
  		</div>
	    
    );
  }
});

module.exports = CreateRecipePage;