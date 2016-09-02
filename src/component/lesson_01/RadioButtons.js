import React, { Component } from 'react';

class RadioButtons extends Component {
    static defaultProps = {
        radioData: [
            {id:1,text:"篮球",name:"sport",isDefaultChecked:false},
            {id:2,text:"游泳",name:"sport",isDefaultChecked:true},
            {id:3,text:"足球",name:"sport",isDefaultChecked:false}
        ]
    }

    render() {
        return (
            <div>
                {this.props.radioData.map((item,id) => {
                    return (
                        <label key={'radio_'+id}>
                            {item.text}
                            <input onChange={this.props.handleRadio} name={item.name} type="radio" value={item.id}  />
                        </label>
                    );
                })}
            </div>
        );
    }
}

export default RadioButtons;
