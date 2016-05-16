import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';

class HandleDOMComponent extends Component {
  componentDidMount(){
    //两种方式获取元素
    let ele = findDOMNode(this.refs.content);
    let ele2 = this.refs.content;

    console.log(ele);
    console.log(ele.innerHTML);
    console.log(ele2.innerHTML);
  }

  render(){
    return (
      <div>
        <p>操作DOM</p>
        <div ref= 'content'>DOM元素内容</div>
      </div>
    )
  }
}

export default HandleDOMComponent;
