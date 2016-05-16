import React, { Component } from 'react';

class Checkboxes extends Component {
  render(){
    return <span>
      A
      <input onChange={ this.props.handleCheck } name='checkbox' type="checkbox" value="A" />

      B
      <input onChange={ this.props.handleCheck } name='checkbox' type="checkbox" value="B" />

      C
      <input onChange={ this.props.handleCheck } name='checkbox' type="checkbox" value="C" />

    </span>
  }
}

export default Checkboxes;
