import React, {Component} from 'react';

export default class Home extends Component{
  constructor() {
  	super();
  	this.state = {
  	  word: 'well'
  	}
  }

  render() {
  	var green = [<div>green</div>, <div>blue</div>];
    return (
      <div>
      	Homepage
      	{green}
      	{this.state.word}
      </div>
    )
  }
};
