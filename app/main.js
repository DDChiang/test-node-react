var React = require('react');
var ReactDOM = require('react-dom');
var App = React.createFactory(require('./components/App'));
var AppActionCreator = require('./creators/AppActionCreator');

var ExecutionEnvironment = require('exenv');

var ReactRouter = require('react-router'),
  Router = ReactRouter.Router,
  match = ReactRouter.match,
  RoutingContext = ReactRouter.RoutingContext,
  ReactDOMServer = require('react-dom/server');
var routes = require('./routes');
var createBrowserHistory = require('history/lib/createBrowserHistory'); // The independent history module

/**
 * Application Entry
 * Loading the application is done by dispatching an application action
 */

var Application = {
  start: function(appData, callback) {
    if ( ExecutionEnvironment.canUseDOM ) {
      // Client-side rendering
      var history = createBrowserHistory();
      ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('root'));
    } else {
      // Server-side rendering
      if ( !appData.path ) {
        return callback(new Error('path cannot be null'));
      } else {
        match({ routes: routes, location: appData.path },
          function(err, redirectLocation, renderProps) {
            if (err) {
              callback(err);
            } else if (redirectLocation) {
              callback(redirectLocation);
            } else if (renderProps) {
              callback(null, ReactDOMServer.renderToString(<RoutingContext {...renderProps}/>));
            } else {
              callback(404);
            }
          });
      }
    }
  }
}

module.exports = Application;