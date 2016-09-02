import React, { Component } from 'react';

class ToggleEvent extends Component {
    constructor() {
        super();
        this.state = {
            like: true,
        };
    }
    handleClick() {
        this.setState({like: !this.state.like});
    }
    render() {
        var text = this.state.like ? 'like' :'unlike';
        return (
            <div>
                <p onClick={ this.handleClick.bind(this) }>You { text } this click the toggle.</p>
            </div>
        );
    }
}

export default ToggleEvent;
