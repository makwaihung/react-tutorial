import React, { Component } from 'react';

class RepeatArray extends Component {
    render() {
        var arr = [
            <h3  key="h3">hello world!</h3>,
            <h4 key="h4">React is Javascript lib.</h4>
        ];
        var names = ['mak','Tom','Jim'];
        return (
            <div>
                {arr}
                { names.map((value,id) => {
                    var key = 'name_'+id;
                    return (
                        <div key={key} >Hello, { value }!</div>
                    )
                    })
                }
            </div>
        );
    }
}

export default RepeatArray;
