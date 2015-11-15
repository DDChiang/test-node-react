var React = require('react'),
  ReactDOM = require('react-dom'),
  AppActionCreator = require('../creators/AppActionCreator'),
  AppStore = require('../stores/AppStore');

// React router facility
var Router = require('react-router'),
  RouteHandler = Router.RouteHandler;

var App = React.createClass({
  mixins : [Router.History],
  displayName: 'App',
  contextTypes: {
    // For exposing the location object on the context (react-router=v1.0.0-rc3)
    location: React.PropTypes.object
  },
  render: function() {
    // The sub component of the application page is handled by "react-router"
    var path = this.context.location.pathname;
     // If dynamic route, remove id
    if ( path.indexOf("/video/") === 0 ) {
      path = "/video";
    }

    return(
      <div>
        <p>NIGHT Morn!</p>
        { /*children are autmotically populated according to tehcurrent route by react router(>=v1.0.0)*/}
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;

