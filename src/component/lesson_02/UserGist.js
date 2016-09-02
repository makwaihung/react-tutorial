import React, { Component } from 'react';

import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

class UserGist extends Component {
    constructor (){
        super();
        this.state = {
            username : '',
            lastGistUrl : ''
        };
    }

    componentWillMount() {
        let _self = this;
        fetch(this.props.url)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(gists) {
                _self.setState({
                    username: gists[0].owner.login,
                    lastGistUrl:gists[0].html_url
                });
            });
    }

    render() {
        return (
            <div>
                {this.state.username}..
                <a href={ this.state.lastGistUrl }>here</a>
            </div>
        )
    }

}

export default UserGist;
