var React = require('react');
var FieldItem = require('./FieldItem');

var stepsListEditor = React.createClass({
  getDefaultProps: function() {
    return {
      stepsData: ['','','']
    };
  },
  getInitialState: function() {
    return {
      stepsData: this.props.stepsData
    }
  },
  editItem: function(e) {
    var tempData = this.state.stepsData;
    tempData[e.target.getAttribute('data-id')] = e.target.value;
    this.setState(tempData);
  },
  deleteItem: function(e) {
    var tempData = this.state.stepsData;

    if (tempData.length === 1) { // replace w empty field
      var stepsLength = tempData.length;
      tempData[stepsLength-1] = '';
    } else { // delete
      tempData.splice([e.target.getAttribute('data-id')], 1);
      this.setState({stepsData: tempData});
    }
  },
  addItem: function(e) {
    e.preventDefault();
    var tempData = this.state.stepsData;
    var stepsLength = tempData.length;

    if ( tempData[stepsLength-1].trim() != '') {
      tempData = tempData.concat('');
      this.setState({ stepsData: tempData });
    } 

  },
  render: function() {
    var stepsItems = ( <FieldItem /> );
    var placeholderVal = 'slice 3 sprigs of carrot';

    if (this.state.stepsData) {
      stepsItems = this.state.stepsData.map(function(item, i) {
        return (
          <FieldItem key={i} index={i} 
            refVal='steps'
            placeholderVal={placeholderVal}
            itemData={item} 
            handleEditItem={this.editItem}
            handleDeleteItem={this.deleteItem}/>
        );
      }, this);
    } 

  	return (
  		<form>
  			<h1>Steps:</h1>
  			<ul ref="list" >
           {stepsItems}
		    </ul>
        <a href="#" value="addItem" onClick={this.addItem}>add step</a>
  		</form>
    );
  }
});

module.exports = stepsListEditor;