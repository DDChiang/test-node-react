var React = require('react');
var classnames = require('classnames');

var BasicInfo = React.createClass({
  render: function() {
    var name = 'title to be created';
    if (this.props.nameData) {
      name = this.props.nameData; 
    }
  	return (
      <div>
        <h1>Basic Info.</h1>
        <h2>{name}</h2>
        <h3>Uploaded Pic</h3>
      </div>
    );
  }
});

module.exports = BasicInfo;