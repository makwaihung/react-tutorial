import React, { Component } from 'react';
import moment from 'moment';

class CommentForm extends Component {
    handleSubmit(e){
      e.preventDefault();

      console.log('提交表单....');

      let author = this.refs.author.value.trim();
      let text = this.refs.text.value.trim();

      if( author ==='' || text === ''){
        alert('亲！请填完整资料！');
      }else {
        // console.log(name, text);
        let date = moment().format('YYYY-MM-DD, HH:mm:ss');
        let cid = Math.round(new Date().getTime()/1000)
        this.props.onCommentSubmit({cid: cid, author: author, text: text, date: date });
        //清空
        this.refs.author.value = '';
        this.refs.text.value = '';
      }
    }

    render() {
      return (
        <form className="ui reply form" onSubmit={ this.handleSubmit.bind(this) }>
          <div className="field">
            <input type="text" placeholder="请输入您的姓名..." ref="author" className="ui input"/>
          </div>
          <div className="field">
            <textarea type="text" placeholder="该评论点什么..." ref="text" className="ui textarea"></textarea>
          </div>
          <div className="field">
            <button type="submit" className="ui green button" >添加评论</button>
          </div>
        </form>
      )
    }
}

export default CommentForm;
