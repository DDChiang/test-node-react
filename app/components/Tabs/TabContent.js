// accepts tabContent array
var React = require('react');
var classnames = require('classnames');

var TabContent = React.createClass({
  getInitialState: function() {
    return ({step: 0});
  },
  render: function() {
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
});

module.exports = TabContent;