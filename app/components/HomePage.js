var React = require('react');

var HomePage = React.createClass({
	componentDidMount: function() {
		console.log('home page is mounted!');
	},
  render: function() {
    return (
      <div>Home of future Recipe github</div>
    )
  }
});

module.exports = HomePage;
