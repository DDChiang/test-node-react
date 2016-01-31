import React, { PropTypes, Component } from 'react';
import Router, { Link } from 'react-router';

export default class Navbar extends Component{
  render() {
    return (
      <nav>
      	<ul>
          <li><Link to="/">Home</Link></li>
      		<li><Link to="/recipe">Recipe</Link></li>
          <li><Link to="/createRecipe">Create Recipe</Link></li>
          <li><Link to="/test">Edit Recipe</Link></li>
      	</ul>
      </nav>
    )
  }
};

module.exports = Navbar;
