var React = require('react');

var Base = React.createClass({
  render: function() {
    return (<div>Yo</div>);
  }
});

React.render(<Base/>, document.getElementById('content'));
console.log('hey');
