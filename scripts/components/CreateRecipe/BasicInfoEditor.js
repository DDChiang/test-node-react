import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class BasicInfoEditor extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      name: this.props.nameData
    }
  }

  editName(e) {
    this.setState({name: e.target.value});
  }

  render() {
  	return (
      <div>
        <h1>Basic Info Editor</h1>
        <input type="text" value={this.state.name} onChange={this.editName} placeholder='enter a name for your recipe'/>
        <h3>Uploaded Pic</h3>
      </div>
    );
  }
};

BasicInfoEditor.defaultProps = {
  name: ''
}

