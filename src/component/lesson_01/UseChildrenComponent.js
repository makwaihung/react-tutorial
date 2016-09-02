import React, { Component } from 'react';

class ListComponent extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.children.map((item,id) => {
                        return <li key={id}>{item}</li>
                    })
                }
            </ul>
        );
    }
}

class UseChildrenComponent extends Component {
    render() {
        return (
            <ListComponent>
                <a href="http://www.baidu.com">百度</a>
                <a href="http://www.qq.com">腾讯</a>
                <a href="http://www.jd.com">京东</a>
            </ListComponent>
        )
    }
}

export default UseChildrenComponent;
