// link inside tabHeader
var React = require('react');
var classnames = require('classnames');

var TabLink = React.createClass({
  getInitialState: function() {
    return ({step: 0});
  },
  render: function() {
    var name = this.props.itemData.name;
    console.log(this.props.activeState);
  	return (
      <li className={classnames({active: this.props.activeState})} >
        <a href={this.props.hrefVal} data-id={this.props.dataID}
          onClick={this.props.handleClick}>
          {name}
        </a>
      </li>
    );
  }
});

module.exports = TabLink;