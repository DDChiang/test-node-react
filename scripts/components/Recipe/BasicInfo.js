import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class BasicInfo extends Component{
  render() {
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
};

