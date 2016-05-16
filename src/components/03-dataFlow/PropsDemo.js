import React, { Component } from 'react';

class PropsDemo extends Component {

  constructor(props){
    super(props);
    props = {
      title: '默认title属性标题'
    }
  }

  render(){
    console.log(this.props);

    return <b>{ this.props.title }</b>
  }
}

export default PropsDemo;
