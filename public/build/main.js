'use strict';

React = require('react');
var Box = require('./box');

var Base = React.createClass({
  displayName: 'Base',

  render: function render() {
    return React.createElement(
      'div',
      null,
      ' Box'
    );
  }
});

React.render(React.createElement(Base, null), document.getElementById('content'));

console.log(React);