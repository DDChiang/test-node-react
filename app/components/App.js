var React = require('react'),
  ReactDOM = require('react-dom'),
  AppActionCreator = require('../creators/AppActionCreator'),
  AppStore = require('../stores/AppStore'),
  Navbar = require('./Navbar'),
  Footer = require('./Footer');

// React router facility
var Router = require('react-router'),
  RouteHandler = Router.RouteHandler;

var App = React.createClass({
  displayName: 'Index',
  // contextTypes: {
  //   // For exposing the location object on the context (react-router=v1.0.0-rc3)
  //   location: React.PropTypes.object
  // },
  render: function() {
    return(
    <div>
      <Navbar />
        { /*children are autmotically populated according to tehcurrent route by react router(>=v1.0.0)*/}
        {this.props.children}
      <Footer/>
    </div>
    )
  }
});



module.exports = App;

