'use strict'

import React, { Component } from 'react';

class HandleEvent extends Component {
  state = {
    liked: false
  }

  handleClick = (event) => {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    let text = this.state.liked ? '喜欢' : '讨厌';

    return (
      <p onClick={this.handleClick}>
        我
        <button className="ui button" style={{margin:'0 15px'}}>{ text }</button>
        你。
      </p>
    )
  }
}


export default HandleEvent;
