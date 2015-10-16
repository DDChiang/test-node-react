'use strict';

var Base = React.createClass({
  displayName: 'Base',

  render: function render() {
    return React.createElement(
      'div',
      null,
      'HELLP'
    );
  }
});

React.render(React.createElement(Base, null), document.getElementById('content'));