// tab component can act as sign up funnel

// 1. timed tab component
// 	- funnels you through tabs in order


// 2. tab component
//    - used when done

var React = require('react');
var TabHeader = require('./TabHeader');

var Tabs = React.createClass({
  getInitialState: function() {
    return ({step: 0});
  },
  render: function() {
    var tabData = [{name: 'basic info'}, {name: 'ingredients'}, {name: 'steps'}, {name: 'quick facts'}];
    // TODO:  tab component
      // tab component that redirects you thru steps
  	return (
    	<div className="tabs">
    	 <TabHeader tabData={tabData}/>
    	</div>
    );
  }
});

module.exports = Tabs;