// Links in tab header
// accepts 'timed order' prop <-- funnels you thru steps ? // styling
import React, { PropTypes, Component } from 'react';
import TabLink from './TabLink';

function transformHrefVal(word) {
  var str = word.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
  var splitStr = str.split(" ").join("");
  var transformWord = '#' + splitStr;
  return transformWord;
}

export default class TabHeader extends Component {
 constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
  }

  render() {
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
};
