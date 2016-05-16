'use strict';

import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';


class CommentBox extends Component {

  constructor(props){
    super(props);
    this.state = { data: [] };
    this.getComments();
    // setInterval(() => this.getComments(), 5000);
  }

  handleCommentSubmit(comment){

    console.log(comment);

    let comments = this.state.data;
    let newComments = comments.concat(comment);

    this. setState({data: newComments})

  }

  getComments(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: commentData => {
        console.log('ajax success!')
        this.setState({
          data: commentData
        })
      },
      error: (xhr, status, error) => {
        console.log(error);
      }
    })
  }


  render() {
    return (
      <div className="ui comments">
        <h1>评论</h1>
        <div className="ui divider"></div>
        <CommentList data = { this.state.data }/>
        <CommentForm  onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
      </div>
    );
  }
}

export default CommentBox;
