import React, { Component } from 'react';

class NotesLi extends Component {
    render() {
        return (
                <ol>{ this.props.children.map((child,id) => {
                        return (
                            <li key={'child_'+id}>{child}</li>
                        );
                    })}
                </ol>
        );
    };
}

export default NotesLi;
