// accepts tabContent array
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class TabContent extends Component {
  constructor(props) {
    super(props);
    this.state = {step: 0};
  } 

  render() {
    var tabContent = 'tab content'; 

    if (this.props.tabContent) {
      tabContent = this.props.tabContent.map(function(item, i){
        var activeState = false;
        if (i == this.props.activeTab) {
          activeState = true;
        }
        return (
          <div key={i} className={classnames("innerContent", {active: activeState})}>
            {item}
          </div>
        );
      }, this);
    }

  	return (
    	<div className="tabContent">
        {tabContent}
    	</div>
    );
  }
};
