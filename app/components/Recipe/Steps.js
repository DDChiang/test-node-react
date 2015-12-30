var React = require('react');

function assignSpan(match) {
    // TODO: dynamically set ingred quicklink 'pop up' content inside dbase 'dictionary' to pull out later  
    return ('<span class="ingred_quickLink">' + match + '</span>');
}

var RecipeSteps = React.createClass({
  componentDidMount: function() {
    var stepsContent = this.refs.list.innerHTML;
    // check if ingred data has been cached
    if (this.props.ingredCache) {
      var ingredCache = this.props.ingredCache;
      var ingredMatchExp = '';
      for (var i = 0, icLength = ingredCache.length; i < icLength; i++) {
        if (i < (icLength - 1)) {
          ingredMatchExp += '\\b' + ingredCache[i] + '(?:s)?\\b\|';
        } else {
          ingredMatchExp += '\\b' + ingredCache[i] + '(?:s)?\\b';
        }
      }

      var regPatt = new RegExp(ingredMatchExp, 'ig');
      this.refs.list.innerHTML = stepsContent.replace(regPatt, assignSpan);
    }
  },
  render: function() {
    var stepsList = this.props.stepsData.map(function(item, i) {
      var indexOrder = i + 1 + '.';

      return (
        <li key={i}>
          <span className="order">{indexOrder}</span>
          {item}
        </li> 
      );
    });
  	return (
  		<div className="steps">
  			<h1>Steps:</h1>
  			<ul ref="list" className="stepsList">
		      {stepsList}
		    </ul>
  		</div>
    );
  }
});

module.exports = RecipeSteps;