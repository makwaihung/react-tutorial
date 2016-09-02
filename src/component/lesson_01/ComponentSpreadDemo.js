import React, { Component } from 'react';

class ComponentSpreadDemo extends Component {
    componentWillMount() {
        console.log(this.props);
    }

    render() {
        return <div> { this.props.name } is a { this.props.type}</div>
    }
}

export default ComponentSpreadDemo;
