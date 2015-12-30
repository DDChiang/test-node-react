// Links in tab header
// accepts 'timed order' prop <-- funnels you thru steps ? // styling
var React = require('react');

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
    return ({step: 0});
  },
  render: function() {
    var tabLinks = this.props.tabData.map(function(item, i) {
      var hrefVal = transformHrefVal(item.name);
      return (
        <li key={i}>
          <a href={hrefVal}>{item.name}</a>
        </li>
      );
    });

  	return (
  		<div className="tabHeader">
        {tabLinks}
  		</div>
    );
  }
});

module.exports = TabHeader;