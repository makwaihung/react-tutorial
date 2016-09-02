import React, { Component, PropTypes } from 'react';

class PropTypesDemo extends Component {
    //设置默认属性
    static defaultProps = {
        title: '这是默认标题'
    }
    //限制属性的类型
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render() {
        console.log(this.props);
        return (
            <div> { this.props.title} </div>
        )
    }
}

export default PropTypesDemo;
