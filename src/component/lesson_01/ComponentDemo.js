import React, { Component } from 'react';

class ComponentDemo extends Component {
    render() {
        const name = this.props.name
        return (
            <div>
                Hello, my name is { name ? name : 'xxx'}.
            </div>
        );
    }
}

export default ComponentDemo;
