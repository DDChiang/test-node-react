var React = require('react'),
  App = require('./components/App'),
  RecipePage = require('./components/RecipePage'),
  HomePage = require('./components/HomePage'),
  TestPage = require('./components/TestPage');

// React router
var Router = require('react-router'),
  Route = Router.Route,
  DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route path='/' handler={App}>
    <DefaultRoute handler={HomePage}/>
    <Route path='recipe' handler={RecipePage}/>
    <Route path='test' handler={TestPage}/>
  </Route>
);

module.exports = routes;
