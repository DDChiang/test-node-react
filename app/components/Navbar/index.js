var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Navbar = React.createClass({
  render: function() {
    return (
      <nav>
      	<ul>
          <li><Link to="/">IHome</Link></li>
      		<li><Link to="/test">Test</Link></li>
      		<li><Link to="/recipe">Recipe</Link></li>
          <li><Link to="/createRecipe">Create Recipe</Link></li>
      	</ul>
      </nav>
    )
  }
});

module.exports = Navbar;
