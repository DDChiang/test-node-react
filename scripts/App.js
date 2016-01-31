require('./sass/main.scss');

import React, { Component, PropTypes } from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export class App extends Component {
  render() {
  	return (
  	  <div className="App">
  	  	<Navbar/>
        {/* use Link to route around the app */}
        {this.props.children}
        <Footer />
      </div>
  	)
  }
};