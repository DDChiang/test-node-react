var React = require('react');
var Tabs = require('./Tabs');
var IngredListEditor = require('./CreateRecipe/IngredListEditor');

var CreateRecipePage = React.createClass({
  getInitialState: function() {
    return ({step: 0});
  },
  render: function() {
    // TODO:  tab component
      // tab component that redirects you thru steps
  	return (
  		<div className="createRecipe">
        <Tabs />
  			<div className="ingredListEditor">
  				<IngredListEditor />
  			</div>
        <button>cancel</button>
        <button>next step</button>
  		</div>
    );
  }
});

module.exports = CreateRecipePage;