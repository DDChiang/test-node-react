// Links in tab header
// accepts 'timed order' prop <-- funnels you thru steps ? // styling
var React = require('react');
var TabLink = require('./TabLink');

function transformHrefVal(word) {
  var str = word.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
  var splitStr = str.split(" ").join("");
  var transformWord = '#' + splitStr;
  return transformWord;
}

var TabHeader = React.createClass({
  getInitialState: function() {
    return ({
      step: 0
    });
  },
  render: function() {
    var tabLinks = this.props.tabData.map(function(item, i) {
      var hrefVal = transformHrefVal(item.name);
      var activeState = false;

      if (i == this.props.activeTab) {
        activeState = true;
      }

      return (
        <TabLink key={i} activeState={activeState} 
          hrefVal={hrefVal} itemData={item} 
          dataID={i}
          handleClick={this.props.handleSwitchTab} />
      );
    }, this);

  	return (
  		<ul className="tabHeader">
        {tabLinks}
  		</ul>
    );
  }
});

module.exports = TabHeader;