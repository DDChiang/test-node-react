import React, { PropTypes, Component } from 'react';
import FieldItem from './FieldItem';

// TODO: DRAG REORDERING

export default class StepListEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepsData: this.props.stepsData
    };
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

  }

  editItem(e) {
    var tempData = this.state.stepsData;
    tempData[e.target.getAttribute('data-id')] = e.target.value;
    this.setState(tempData);
  }

  deleteItem(e) {
    var tempData = this.state.stepsData;

    if (tempData.length === 1) { // replace w empty field
      var stepsLength = tempData.length;
      tempData[stepsLength-1] = '';
    } else { // delete
      tempData.splice([e.target.getAttribute('data-id')], 1);
      this.setState({stepsData: tempData});
    }
  }

  addItem(e) {
    e.preventDefault();
    var tempData = this.state.stepsData;
    var stepsLength = tempData.length;

    if ( tempData[stepsLength-1].trim() != '') {
      tempData = tempData.concat('');
      this.setState({ stepsData: tempData });
    } 

  }

  render() {
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
  		<form className="stepListEditor">
  			<h1>Steps:</h1>
  			<ul ref="list" >
           {stepsItems}
		    </ul>
        <a href="#" value="addItem" onClick={this.addItem}>add step</a>
  		</form>
    );
  }
};

StepListEditor.defaultProps = {
  stepsData: ''
}
