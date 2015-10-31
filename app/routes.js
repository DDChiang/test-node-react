var React = require('react'),
  App = require('./components/App'),
  RecipePage = require('./components/RecipePage'),
  HomePage = require('./components/HomePage'),
  TestPage = require('./components/TestPage');

// React router
var ReactRouter = require('react-router'),
  Router = ReactRouter.Router,
  Route = ReactRouter.Route,
  IndexRoute = ReactRouter.IndexRoute;

var routes = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage}/>
    <Route path='recipe' component={RecipePage}/>
    <Route path='test' component={TestPage}/>
  </Route>
);

module.exports = routes;
