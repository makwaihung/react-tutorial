'use strict';

import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <div className="content">
          <span className="author">{ this.props.author}</span>:
          <span className="date">{ this.props.date }</span>
          <div className="text">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Comment;
