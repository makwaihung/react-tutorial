import React, { Component } from 'react';

class StateDemo extends Component {
  state = {
    secondElapsed: 0
  }

  tick(){
    this.setState({
      secondElapsed: this.state.secondElapsed + 1
    })
  }

  componentDidMount(){
    this.interval = setInterval( this.tick.bind(this), 1000 );
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){
    return (
      <div>目前已经计时间：{this.state.secondElapsed}秒。</div>
    )
  }
}

export default StateDemo;
