var React = require('react');
var ReactDOM = require('react-dom');
var Steps = require('./Recipe/Steps');
var IngredList = require('./Recipe/IngredList');

function assignSpan(match) {
    // TODO: dynamically set ingred quicklink 'pop up' content inside dbase 'dictionary' to pull out later  
    return '<span class="ingred_quickLink">' + match + '</span>';
}

var RecipePage = React.createClass({
  componentDidMount: function() {
    // TODO: most likely, the 'parsing' will be done server side, then delivered to client side
    var ingred = ['carrot', 'apple', 'kale'];
    var stepsContent = this.refs.steps.refs.list.innerHTML;
    var ingredList = '';
    for (var i = 0, iLen = ingred.length; i < iLen; i++) {
        if (i !== (iLen -1) ) {
            ingredList += '\\b' + ingred[i] + '(?:s)?\\b\|';
        } else {
            ingredList += '\\b' + ingred[i] + '(?:s)?\\b';
        }
    }

    var matchPatt = ingredList; // + '\/ig'
    var regPatt = new RegExp(matchPatt, 'ig'); // starts RegExp w '/' and ends it wigh '/ig'

    this.refs.steps.refs.list.innerHTML = stepsContent.replace(regPatt, assignSpan);
  },
  render: function() {
    return (
      <div>
        <IngredList ref="ingredList" />
        <Steps ref="steps"/>
      </div>  
    );
  }
});

module.exports = RecipePage;
