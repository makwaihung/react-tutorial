import React, { Component } from 'react';

class SpreadDemo extends Component {
  componentWillMount(){
    console.log(this.props);
  }

  render(){
    return <div>{ this.props.name } is a { this.props.type }</div>
  }
}

export default SpreadDemo;
