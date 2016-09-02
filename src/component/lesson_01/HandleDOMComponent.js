import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

class HandleDOMComponent extends Component {
    componentDidMount() {

        //两种方式获取Dom 元素
        //方法一
        let ele = findDOMNode(this.refs.content);

        //方法二
        let ele2 = this.refs.content;

        console.log(ele);
        console.log(ele2);
        console.log(ele.innerHTML);
        console.log(ele2.innerHTML);
    }

    render() {
        return (
            <div>
                <p>操作DOM元素方式</p>
                <div ref="content">这是Dom元素内容，查看console输出</div>
            </div>
        );
    }
}

export default HandleDOMComponent;
