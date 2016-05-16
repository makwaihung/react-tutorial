import React, { Component } from 'react';

class RadioButtons extends Component {
  saySomething(){
    alert('你点击了单选框按钮组')
  }
  render(){
    return <span>
      A
      <input onChange={this.props.handleRadio} name="radio" type="radio" value="A"/>
      B
      <input onChange={this.props.handleRadio} name="radio" type="radio" value="B" defaultChecked />
      C
      <input onChange={this.props.handleRadio} name="radio" type="radio" value="C"/>
    </span>
  }
}

export default RadioButtons;
