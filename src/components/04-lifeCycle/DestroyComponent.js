import React, { Component } from 'react';
import LifeCycle from './LifeCycleDemo';


class DestroyComponent extends Component {

  state = {
    value:1,
    destroyed:false
  }

  increase = () => {
    this.setState({
      value: this.state.value + 1
    });
  }

  destroy = () => {
    this.setState({
      destroyed: true
    });
  }

  render(){
    if(this.state.destroyed){
      return null;
    }

    return <div>
          <p>
            <button onClick= {this.increase} className="ui green button"> 每次加1 </button>
            <button onClick= {this.destroy} className="ui green button">销毁两个Button</button>
          </p>
          <LifeCycle value = {this.state.value} />
      </div>

  }

}


export default DestroyComponent;
