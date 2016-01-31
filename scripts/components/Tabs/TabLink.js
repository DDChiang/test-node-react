// link inside tabHeader
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class TabLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    };
  }

  render() {
    var name = this.props.itemData.name;
  	return (
      <li className={classnames({active: this.props.activeState})} >
        <a href={this.props.hrefVal} data-id={this.props.dataID}
          onClick={this.props.handleClick}>
          {name}
        </a>
      </li>
    );
  }
};

