import React, { PropTypes, Component } from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { createHistory, createHashHistory } from 'history';
import { App } from './App';
import Home from './components/HomePage';
import { About } from './components/About';
import RecipePage from './components/RecipePage';
import CreateRecipePage from './components/CreateRecipePage';
import { TestPage } from './components/TestPage';

// Use hash location for Github Pages
// but switch to HTML5 history locally.
const history = process.env.NODE_EVT === 'production' ? 
  createHashHistory() : createHistory();

export class Root extends Component {
  render() {
  	return (
      <Router history={history}>
    	  <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/Recipe' component={RecipePage} />
          <Route path='/CreateRecipe' component={CreateRecipePage} />
          <Route path='/Test' component={TestPage} />
    	  </Route>
      </Router>
  	);
  }
}