import React, { Component } from 'react';

class ComponentStyle extends Component {
    render() {
        let styleObject = {
            color: 'red',
            fontFamily: '微软雅黑'
        };

        return (
            <div style={ styleObject } >
                这是组件定义样式
            </div>
        )
    }
}

export default ComponentStyle;
