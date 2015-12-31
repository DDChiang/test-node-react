var React = require('react');
var classnames = require('classnames');

var BasicInfoEditor = React.createClass({
  getDefaultProps: function() {
    return {
      name: ['']
    };
  },
  getInitialState: function() {
    return {
      name: this.props.nameData
    }
  },
  editName: function(e) {
    this.setState({name: e.target.value});
  },
  render: function() {
  	return (
      <div>
        <h1>Basic Info Editor</h1>
        <input type="text" value={this.state.name} onChange={this.editName} placeholder='enter a name for your recipe'/>
        <h3>Uploaded Pic</h3>
      </div>
    );
  }
});

module.exports = BasicInfoEditor;