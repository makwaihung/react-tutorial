import React, {Component} from 'react';
import CheckBoxes from './CheckBoxes';
import RadioButtons from './RadioButtons';

//
let listData = [
    {
        id: 1,
        text: "苹果",
        name: "fruit"
    }, {
        id: 2,
        text: "香蕉",
        name: "fruit"
    }, {
        id: 3,
        text: "西瓜",
        name: "fruit"
    }
];

class FormDemo extends Component {

    constructor() {
        super()
        this.state = {
            inputValue: '这是input数据',
            selectValue: 'A',
            radioValue: '',
            checkValues: [],
            textareaValue: '这是textarea'
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        let formData = {
            inputValue: this.refs.inputRef.value,
            selectValue: this.refs.selectRef.value,
            radioValue: this.state.radioValue,
            checkValues: this.state.checkValues,
            textareaValue: this.refs.textareaRef.value
        }

        alert('您即将提交表单');
        console.log('您提交的数据是：');
        console.log(formData);

    }

    handleRadio(e) {
        console.log("handleRadio")
        this.setState({radioValue: e.target.value});
    }

    handleCheck(e) {
        let checkValues = this.state.checkValues.slice();
        let newVal = e.target.value;
        let index = checkValues.indexOf(newVal);

        if (index === -1) {
            checkValues.push(newVal)
        } else {
            checkValues.splice(index, 1);
        }

        this.setState({checkValues: checkValues});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h4>input 输入内容</h4>
                <input ref="inputRef" type="text" defaultValue={this.state.inputValue}/>
                <br/>

                <h4>select 选择</h4>
                <select defaultValue={this.state.selectValue} ref="selectRef">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="E">E</option>
                </select>
                <br/>

                <h4>单项选择</h4>
                <RadioButtons radioData={listData} handleRadio={this.handleRadio.bind(this)}/>
                <br/>

                <h4>多选按钮</h4>
                <CheckBoxes checkBoxData={listData} handleCheck={this.handleCheck.bind(this)}/>
                <br/>

                <h4>反馈建议</h4>
                <textarea defaultValue={this.state.textareaValue} ref='textareaRef'></textarea>
                <br/>

                <button type="submit">确认提交</button>
            </form>
        );
    }
}

export default FormDemo;
