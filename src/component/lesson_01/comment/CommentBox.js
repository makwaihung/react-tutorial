import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Wilddog from 'wilddog';
import { mixin } from 'core-decorators';
import WildReactMixin from 'wildreact';

@mixin(WildReactMixin)
class CommentBox extends Component {
    constructor() {
        super()
        this.state = {
            data:[]
        };
    }

    postCommentData(comment){
      let ref = new Wilddog('https://reactchat.wilddogio.com/');
      let postsRef = ref.child('data');
      postsRef.push({
        cid: comment.cid,
        author: comment.author,
        text:comment.text,
        date:comment.date
      });
    }

    componentDidMount() {
      let ref = new Wilddog('https://reactchat.wilddogio.com/data');
      // console.log(ref)
      this.bindAsArray(ref, 'data');
    }

    componentWillUnMount() {
      this.unbind('data');
    }

    handleCommentSubmit(comment){
      // console.log(comment);
      this.postCommentData(comment)
    }

    render() {
        return (
            <div className="ui comments">
              <h1>评论</h1>
              <div className="ui divider"></div>
              <CommentList data={ this.state.data } />
              <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
            </div>
        )
    }
}

export default CommentBox;
