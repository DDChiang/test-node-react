// var React = require('react');
// var NoteBase = require('./components/NoteTaker');

// var Base = React.createClass({
//   render: function() {
//     return (<NoteBase/>);
//   }
// });

// React.render(<Base/>, document.getElementById('content'));

var React = require('react');
var App = React.createFactory(require('./components/App'));
var AppActionCreator = require('./creators/AppActionCreator');

var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');

var Router = require('react-router');
var routes = require('./routes');

/**
 * Application Entry
 * Loading the application is done by dispatching an application action
 */

var Application = {
  start: function(appData, callback) {
    AppActionCreator.initialize(appData, callback);

    if ( ExecutionEnvironment.canUseDOM ) {
      // Client-side rendering
      Router.run(routes, Router.HistoryLocation, function(Root, state) {
        React.render(<Root />, document.getElementById('root'));
      });
    } else {
      // Server-side rendering
      if ( !appData.path ) {
        return callback(new Error('path cannot be null'));
      } else {
        Router.run(routes, appData.path, function(Root, state) {
          return callback(null, React.renderToString(<Root />));
        });
      }
    }
  }
}

module.exports = Application;
