// tab component can act as sign up funnel

// 1. timed tab component
// 	- funnels you through tabs in order


// 2. tab component
//    - used when done

import React, { PropTypes, Component } from 'react';
import TabHeader from './TabHeader';
import TabContent from './TabContent';

export default class Tabs extends Component {
  constructor() { 
    super();
    // Create + check for step funneling
    this.state = {
      activeTab: 0
    };
    
    this.switchTab = this.switchTab.bind(this); // bind self methods here. es6 removed stuff. es7 may put them back
  }

  switchTab(e) {
    // TODO: check if locked or unlocked step?
    // or are we just 'helping' to shuffle
    console.log(this);
    this.setState({
      activeTab: e.target.getAttribute("data-id")
    });
  }

  render() {
    // TODO:  tab component
      // tab component that redirects you thru steps

    if (this.props.stepOrder) {
      // components w diff event handlers?
      // completely using parent props
      return (
        <div className="tabs">
         <TabHeader tabData={this.props.tabData} 
            activeTab={this.props.activeTab} 
            handleSwitchTab={this.props.handleSwitchTab} />
         <TabContent tabContent={this.props.tabContent}
            activeTab={this.props.activeTab}/>
        </div>
      );
    } 
    else {
      // simple one
      return (
        <div className="tabs">
         <TabHeader tabData={this.props.tabData} 
            activeTab={this.state.activeTab} 
            handleSwitchTab={this.switchTab} />
         <TabContent tabContent={this.props.tabContent}
            activeTab={this.state.activeTab}/>
        </div>
      );
    }

    // if ( this.props.tabContent ) {
    //   return (
    //     <div className="tabs">
    //       <TabHeader tabData={this.props.tabData} activeTab={this.state.activeTab} handleSwitchTab={this.switchTab}/>
    //     </div>
    //   );
    // } else {
    //   return (<div>tabs</div>);
    // }
  }
};
