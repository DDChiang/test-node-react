var React = require('react');

var RecipePage = React.createClass({
	getInitialState: function() {
		return {blue: false};
	},
	componentDidMount: function() {
    this.setState({blue: true});
    alert('mounted!');
  },
  render: function() {
  	var blue = 'Random Page'; 
  	if (this.state.blue) {
  		blue = <div>BLUE</div>;
  	}
    return (
      <div className="random">{blue}</div>
    );
  }
});

module.exports = RecipePage;
