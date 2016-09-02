import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
    render() {
        let commentNode = this.props.data.map((item,id) => {
                        return <Comment key={'comment_'+id} {...item}></Comment>
                    });
        return ( <div>{ commentNode }</div>);
    }
}

export default CommentList;
