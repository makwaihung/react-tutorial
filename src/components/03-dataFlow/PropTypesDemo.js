import React, { Component, PropTypes } from 'react';

class PropTypesDemo extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  constructor(props){
    super(props);
    props = {
      title: '默认title属性标题'
    }
  }

  render(){
    return (
      <b> {this.props.title}</b>
    )
  }
}

export default PropTypesDemo;
