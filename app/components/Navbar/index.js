var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Navbar = React.createClass({
  componentDidMount: function() {
    console.log('really');
  },
  render: function() {
    return (
      <nav>
      	<ul>
          <li><Link to="/">IHome</Link></li>
      		<li><Link to="/test">Test</Link></li>
      		<li><Link to="/recipe">Recipe</Link></li>
      	</ul>
      </nav>
    )
  }
});

module.exports = Navbar;
