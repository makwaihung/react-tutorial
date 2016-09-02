import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ClickEvent extends Component {
    handleClick() {
        ReactDOM.findDOMNode(this.refs.text).focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref="text"/>
                <input type="button" value="聚焦输入框" onClick={ this.handleClick.bind(this)} />
            </div>
        );
    }
}

export default ClickEvent;
