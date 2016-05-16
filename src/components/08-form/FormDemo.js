'use strict';

import React, { Component } from 'react';
import Checkboxes from './Checkboxes';
import RadioButtons from './RadioButtons';

class FormDemo extends Component {

  state = {
    inputValue: '你好！',
    selectValue: 'A',
    radioValue: 'B',
    checkValues: [],
    textareaValue: '这是textarea'
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let formData = {
      input: this.refs.iValue.value,
      select: this.refs.sValue.value,
      textarea: this.refs.tValue.value,
      radio: this.state.radioValue,
      check: this.state.checkValues
    }

    alert('您即将提交表单');
    console.log('您提交的数据是：');
    console.log(formData);
  }

  handleRadio = (e) => {
    this.setState({
      radioValue: e.target.value
    })
  }

  handleCheck = (e) => {
    let checkValues = this.state.checkValues.slice();
    let newVal = e.target.value;
    let index = checkValues.indexOf(newVal);

    if( index == -1 ){
        checkValues.push( newVal )
    }else{
        checkValues.splice(index,1);
    }

    this.setState({
      checkValues: checkValues,
    })
  }

  render(){
    return <form onSubmit={this.handleSubmit}>
        <h4>输入内容</h4>
        <input ref='iValue' type='text' className="ui input" defaultValue={this.state.inputValue}/>
        <br/>

        <h4>请选择</h4>
        <select defaultValue={this.state.selectValue} ref='sValue' className="ui select">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
        </select>
        <br/>

        <h4>单项选择</h4>
        <RadioButtons ref="rValue" handleRadio={ this.handleRadio }/>
        <br/>

        <h4>多选按钮</h4>
        <Checkboxes handleCheck= {this.handleCheck} />
        <br/>

        <h4>反馈建议</h4>
        <textarea defaultValue={this.state.textareaValue} ref='tValue' className="ui textarea"></textarea>
        <br/>

        <button type="submit" className="ui green button">确认提交</button>
    </form>
  }

}

export default FormDemo;
