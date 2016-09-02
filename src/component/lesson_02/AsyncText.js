import React, { Component } from 'react';

class AsyncText extends Component {
    constructor() {
        super();
        this.state = {
            value: "hello",
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        var value = this.state.value;
        return(
            <div>
                <input type="text" value={value} onChange={this.handleChange.bind(this)} />
                <p>This is async text: { value }</p>
            </div>
        );
    }
}

export default AsyncText;
