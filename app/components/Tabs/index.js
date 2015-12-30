// tab component can act as sign up funnel

// 1. timed tab component
// 	- funnels you through tabs in order


// 2. tab component
//    - used when done

var React = require('react');
var TabHeader = require('./TabHeader');
var TabContent = require('./TabContent');

var Tabs = React.createClass({
  getInitialState: function() {
    return ({
      step: 0,
      activeTab: 0
    });
  },
  switchTab: function(e) {
    // TODO: check if locked or unlocked step?
    // or are we just 'helping' to shuffle
    this.setState({activeTab: e.target.getAttribute("data-id")});
  },
  render: function() {
    // TODO:  tab component
      // tab component that redirects you thru steps
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
});

module.exports = Tabs;