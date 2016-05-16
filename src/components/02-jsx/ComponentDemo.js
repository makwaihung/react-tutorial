import React, { Component } from 'react';

//组件命名遵循驼峰命名，首字母大写
class ComponentDemo extends Component {
  render(){
    const name = this.props.name;
    return (
      <div>
        hello, my name is { name ? name : "xxx" }
      </div>
    )
  }
}

export default ComponentDemo;
