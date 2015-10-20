var React = require('react');
var NoteBase = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(e) {
    this.setState({
      value: e.target.value
    });
  },
  cancelNote: function() {
    this.setState({
      value: ''
    });
  },
  save: function() {
    Materialize.toast('Note Saved', 1000, 'rounded');
    this.setState({
      value: ''
    });
  },
  render: function() {
    return (
      <div>
        <textarea row="4" placeholder="type your text here" ref="noteText" onChange={this.handleChange} value={this.state.value}></textarea>
        <button id="cancel" onClick={this.cancelNote}>cancel</button>
        <button id="save" onClick={this.save}>save</button>
        <div id="toast"></div>
      </div>
    );
  }
});

module.exports = NoteBase;
