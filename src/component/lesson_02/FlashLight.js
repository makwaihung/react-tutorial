import React, { Component } from 'react';

class FlashLight extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 1.0
        }
    }

    componentWillMount() {
        setInterval((() => {
            let opacity = this.state.opacity === 1.0 ? 0 : 1.0;
            this.setState({
                opacity:opacity
            });
        }),500);
    }

    render() {
        let spanStyle = {
            display: 'inline-block',
            width: '50px',
            height: '50px',
            backgroundColor:'#5CB85C',
            borderRadius: '50%',
            opacity: this.state.opacity

        };
        return (
            <div>
                <span style={ spanStyle }></span>
            </div>
        );
    }
}

export default FlashLight;
