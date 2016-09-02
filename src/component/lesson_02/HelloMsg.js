import React, { Component } from 'react';

class HelloMsg extends Component {
    render() {
        return (
            <div className="hello" >
                <h1>Hello { this.props.name }</h1>
            </div>
        );
    }
}

export default HelloMsg;
