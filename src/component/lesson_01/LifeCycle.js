import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends Component {
    static defaultProps = {
        value: '开始渲染'
    }
    constructor() {
        super()
        this.state = {
            text: '',
        };
    }

    //在完成首次渲染之前调用，此时仍可以修改组件的state。
    componentWillMount(){
        console.log('componentWillMount---在完成首次渲染之前调用，此时仍可以修改组件的state。');
    }

    /**
     * render
     * 必选的方法，创建虚拟DOM，该方法具有特殊的规则：
     * 1、只能通过this.props和this.state访问数据
     * 2、可以返回null、false或任何React组件
     * 3、只能出现一个顶级组件（不能返回数组）
     * 4、不能改变组件的状态
     * 6、不能修改DOM的输出
     *
     */
    render() {
        console.log('render--渲染');
        return <span ref="renderDom">{this.props.value}</span>
    }

    /**
     * 真实的DOM被渲染出来后调用，在该方法中可通过findDOMNode()访问到真实的DOM元素。
     * 此时已可以使用其他类库来操作这个DOM。
     * 在服务端中，该方法不会被调用。
     */
    componentDidMount() {
        console.log('componentDidMount--渲染之后调用，可以操作dom');
        console.log(ReactDOM.findDOMNode(this.refs.renderDom));
        // this.setState({
        //     text: '再次渲染'
        // })
    }

    /**
    * 组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，
    * 通常不需要使用以避免出现bug。在出现应用的瓶颈时，可通过该方法进行适当的优化
    *
    * 在首次渲染期间或者调用了forceUpdate方法后，该方法不会被调用
    */
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate--组件是否应当渲染新的props或state');
        return true;
    }

    /**
    * 接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。
    */
    componentWillUpdate(nextProps,nextState){
        console.log('componentWillUpdate---接收到新的props或者state后，进行渲染之前调用');
    }

    /**
     * 组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state。
     */
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps--组件接收到新的props时调用');
        console.log(nextProps);
        this.setState({
            value: nextProps.value
        });
    }

    /**
     * 完成渲染新的props或者state后调用，此时可以访问到新的DOM元素。
     */
    componentDidUpdate(prevProps,prevState) {
        console.log('componentDidMount--完成渲染新的props或者state后调用');
        console.log('prevProps: ' + JSON.stringify(prevProps));
        console.log('prevState: ' + JSON.stringify(prevState));
    }

    /**
     * 组件被移除之前被调用，可以用于做一些清理工作，在componentDidMount方法中
     * 添加的所有任务都需要在该方法中撤销，比如创建的定时器或添加的事件监听器。
     */
    componentWillUnmount(prevProps,prevState) {
        console.log('componentWillUnmount---组件被移除之前被调用');
    }

}

export default LifeCycle;
