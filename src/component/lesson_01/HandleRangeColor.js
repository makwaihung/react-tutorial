import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

class HandleRangeColor extends Component {
    constructor (){
        super()
        this.state = {
            red: 128,
            green: 128,
            blue: 128
        };
    }

    update() {
        this.setState({
            red:findDOMNode(this.refs.red).value,
            green:findDOMNode(this.refs.green).value,
            blue:findDOMNode(this.refs.blue).value,
        });
    }

    render() {
        let rgbaColor = `rgba(${ this.state.red },${ this.state.green }, ${ this.state.blue }, 1)`;
        let styelObj = {
            display: 'inline-block',
            width: '40px',
            height: '20px',
            verticalAlign: 'middle',
            backgroundColor: rgbaColor
        }
        return (
            <div>
                <Slider ref="red" update={this.update.bind(this)} />
                {this.state.red}
                <br/>
                <Slider ref="green" update={this.update.bind(this)} />
                {this.state.green}
                <br/>
                <Slider ref="blue" update={this.update.bind(this)} />
                {this.state.blue}
                <p><span style={ styelObj }></span> 对应的RGBA值为：{ rgbaColor }</p>
            </div>
        )
    }
}


class Slider extends Component {
    render() {
        return (
            <input type="range"
                   min="0"
                   max="255"
                   onChange={ this.props.update } />
           );
    }
}

export default HandleRangeColor;
