import React, { PropTypes, Component } from 'react';
import FieldItem from './FieldItem';
import RecipeStore from '../../stores/RecipeStore';
import RecipeActionCreator from '../../creators/RecipeActionCreator';
import _ from 'lodash';

// TODO: DRAG REORDERING

export default class IngredListEditor extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      ingredData: this.props.ingredData
    }

    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

  }

  editItem(e) {
    console.log(e.target.getAttribute('data-id'));
    var tempData = this.state.ingredData;
    tempData[e.target.getAttribute('data-id')] = e.target.value;
    this.setState(tempData);
  }

  deleteItem(e) {
    var tempData = this.state.ingredData;

    if (tempData.length === 1) { // replace w empty field
      var ingredLength = tempData.length;
      tempData[ingredLength-1] = '';
    } else { // delete
      tempData.splice([e.target.getAttribute('data-id')], 1);
      this.setState({ingredData: tempData});
    }
  }

  addItem(e) {
    e.preventDefault();
    var tempData = this.state.ingredData;
    var ingredLength = tempData.length;

    console.log('length: ' + tempData.length);

    if ( tempData[ingredLength-1].trim() != '') {
      tempData = tempData.concat('');
      this.setState({ ingredData: tempData });
    } 
  }

  render() {
    let ingredItems = ( <FieldItem /> );
    const placeholderVal = '2 tbsps of cheese';

    console.log(this.state.ingredData);
    if (this.state.ingredData) {
      ingredItems = this.state.ingredData.map(function(item, i) {
        return (
          <FieldItem key={i} index={i} 
            refVal='ingred'
            placeholderVal={placeholderVal}
            itemData={item} 
            handleEditItem={this.editItem}
            handleDeleteItem={this.deleteItem}/>
        );
      }, this);
    } 

    return (
     <form className="ingredListEditor">
       <h1>Ingredients:</h1>
       <ul ref="list" >
           {ingredItems}
        </ul>
        <a href="#" value="addItem" onClick={this.addItem}>add ingredient</a>
     </form>
    );
  }
};

IngredListEditor.defaultProps = {
  ingredData: ['']
}