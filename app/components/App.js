var React = require('react'),
  AppActionCreator = require('../creators/AppActionCreator'),
  AppStore = require('../stores/AppStore');

// React router facility
// React router facility
var Router = require('react-router'),
  Route = Router.Route,
  RouteHandler = Router.RouteHandler;

function getStateFromStores() {
  return {
    appState: AppStore.getState()
  };
}

var App = React.createClass({
  mixins : [Router.Navigation],
  displayName: 'App',

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
    AppActionCreator.onLoaded(window);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getStateFromStores());
    this.context.router.transitionTo(this.state.appState.path);
  },
  contextTypes: {
    router: React.PropTypes.func
  },

  render: function() {
    return(
      <div>
        <p>Morning Sunshine!</p>
          <RouteHandler />
      </div>
      )
  }
});

module.exports = App;

