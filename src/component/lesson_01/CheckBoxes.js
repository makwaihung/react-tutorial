import React, { Component } from 'react';

class CheckBoxes extends Component {
    static defaultProps = {
        checkBoxData: [
            {id:1,text:"篮球",name:"sport",isDefaultChecked:false},
            {id:2,text:"游泳",name:"sport",isDefaultChecked:true},
            {id:3,text:"足球",name:"sport",isDefaultChecked:false}
        ]
    }
    render() {
        return (
            <div>
                {this.props.checkBoxData.map((item,id) => {
                    return (
                        <label key={'checkBox_'+id}>
                            {item.text}
                            <input onChange={this.props.handleCheck} name={item.name} type="checkbox" value={item.id} />
                        </label>
                    );
                })}
            </div>
        );
    }
}

export default CheckBoxes;
