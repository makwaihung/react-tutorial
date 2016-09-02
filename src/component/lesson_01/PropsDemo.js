import React, { Component } from 'react';

class PropsDemo extends Component {
    render() {
        console.log(this.props);
        return <b>{ this.props.title }</b>
    }
}

export default PropsDemo;
