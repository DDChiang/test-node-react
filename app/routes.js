var React = require('react'),
  App = require('./components/App'),
  HomePage = require('./components/HomePage'),
  RecipePage = require('./components/RecipePage'),
  CreateRecipePage = require('./components/CreateRecipePage'),
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
    <Route path='createRecipe' component={CreateRecipePage}/>
    <Route path='test' component={TestPage}/>
  </Route>
);

module.exports = routes;
