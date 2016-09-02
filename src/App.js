import React, {Component} from 'react';
let logoSrc = require('./vendor/images/logo.svg');

// 引入lesson_01组件
import HelloWorld from './component/lesson_01/HelloWorld';
import ComponentDemo from './component/lesson_01/ComponentDemo';
import ComponentStyle from './component/lesson_01/ComponentStyle';
import ComponentSpreadDemo from './component/lesson_01/ComponentSpreadDemo';
import PropsDemo from './component/lesson_01/PropsDemo';
import StateDemo from './component/lesson_01/StateDemo';
import PropTypesDemo from './component/lesson_01/PropTypesDemo';
import LifeCycle from './component/lesson_01/LifeCycle';
import DestroyComponent from './component/lesson_01/DestroyComponent';
import HandleDOMComponent from './component/lesson_01/HandleDOMComponent';
import HandleRangeColor from './component/lesson_01/HandleRangeColor';
import HandleEvent from './component/lesson_01/HandleEvent';
import SelfCreateComponent from './component/lesson_01/SelfCreateComponent';
import UseChildrenComponent from './component/lesson_01/UseChildrenComponent';
import FormDemo from './component/lesson_01/FormDemo';
import CommentBox from './component/lesson_01/comment/CommentBox';


// 引入lesson_02组件
import HelloMsg from './component/lesson_02/HelloMsg';
import RepeatArray from './component/lesson_02/RepeatArray';
import NotesLi from './component/lesson_02/NotesLi';
import ClickEvent from './component/lesson_02/ClickEvent';
import ToggleEvent from './component/lesson_02/ToggleEvent';
import AsyncText from './component/lesson_02/AsyncText';
import FlashLight from './component/lesson_02/FlashLight';
import UserGist from './component/lesson_02/UserGist';

class App extends Component {

    constructor() {
        super();
        this.state = {
            'spreadData': {'name': 'AlphaGo', 'type': 'robot'},
            'default': {title:'这是修改的标题',text:" 这是内容..."}
        };
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logoSrc} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit
                    <code>src/App.js</code>
                    and save to reload.
                </p>
                <div className="demo-container">
                    <h1>lesson_01</h1>
                    {/* 练习1 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习1：HelloWorld</h2>
                        <div className="item-desc">
                            <HelloWorld></HelloWorld>
                        </div>
                    </div>
                    {/* 练习2 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习2：组件demo展示</h2>
                        <div className="item-desc">
                            <ComponentDemo name="Mak"></ComponentDemo>
                        </div>
                    </div>

                    {/* 练习3 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习3：组件定义样式</h2>
                        <div className="item-desc">
                            <ComponentStyle></ComponentStyle>
                        </div>
                    </div>

                    {/* 练习4 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习4：es6语法扩展属性语法</h2>
                        <div className="item-desc">
                            <ComponentSpreadDemo {...this.state.spreadData}></ComponentSpreadDemo>
                        </div>
                    </div>

                    {/* 练习5 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习5：props属性</h2>
                        <div className="item-desc">
                            <PropsDemo title="这是标题"></PropsDemo>
                        </div>
                    </div>

                    {/* 练习6 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习6：state属性</h2>
                        <div className="item-desc">
                            <StateDemo></StateDemo>
                        </div>
                    </div>

                    {/* 练习7 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习7：PropTypesDemo属性</h2>
                        <div className="item-desc">
                            <PropTypesDemo {...this.state.default}></PropTypesDemo>
                        </div>
                    </div>

                    {/* 练习8 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习8：生命周期</h2>
                        <div className="item-desc">
                            <LifeCycle></LifeCycle>
                        </div>
                    </div>

                    {/* 练习9 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习9：生命周期销毁</h2>
                        <div className="item-desc">
                            <DestroyComponent></DestroyComponent>
                        </div>
                    </div>

                    {/* 练习10 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习10：操作DOM元素</h2>
                        <div className="item-desc">
                            <HandleDOMComponent></HandleDOMComponent>
                        </div>
                    </div>

                    {/* 练习11 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习11：操作DOM元素-元素选择</h2>
                        <div className="item-desc">
                            <HandleRangeColor></HandleRangeColor>
                        </div>
                    </div>

                    {/* 练习12 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习12：事件操作</h2>
                        <div className="item-desc">
                            <HandleEvent></HandleEvent>
                        </div>
                    </div>

                    {/* 练习13 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习13：组件之内创建组件</h2>
                        <div className="item-desc">
                            <SelfCreateComponent></SelfCreateComponent>
                        </div>
                    </div>

                    {/* 练习14 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习14：使用组件children属性</h2>
                        <div className="item-desc">
                            <UseChildrenComponent></UseChildrenComponent>
                        </div>
                    </div>

                    {/* 练习15 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习15：表单事件</h2>
                        <div className="item-desc">
                            <FormDemo></FormDemo>
                        </div>
                    </div>

                    {/* 练习16 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习16：评论实战</h2>
                        <div className="item-desc">
                            <CommentBox></CommentBox>
                        </div>
                    </div>

                </div>
                <div className="demo-container">
                    <h1>lesson_02</h1>
                    {/* 练习一 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习1：HelloMsg</h2>
                        <div className="item-desc">
                            <HelloMsg name="Mak"></HelloMsg>
                        </div>
                    </div>
                    {/* 练习二 */}
                    <div className="demo-item">
                        <h2 className="item-title">练习2：数组遍历展示</h2>
                        <div className="item-desc">
                            <RepeatArray></RepeatArray>
                        </div>
                    </div>

                    {/* 练习三*/}
                    <div className="demo-item">
                        <h2 className="item-title">练习3：ol与li的实现</h2>
                        <div className="item-desc">
                            <NotesLi>
                                <span>apple</span>
                                <span>watermelon</span>
                            </NotesLi>
                        </div>
                    </div>

                    {/* 练习四*/}
                    <div className="demo-item">
                        <h2 className="item-title">练习4：点击事件</h2>
                        <div className="item-desc">
                            <ClickEvent></ClickEvent>
                        </div>
                    </div>

                    {/* 练习五*/}
                    <div className="demo-item">
                        <h2 className="item-title">练习5：toggle事件</h2>
                        <div className="item-desc">
                            <ToggleEvent></ToggleEvent>
                        </div>
                    </div>

                    {/* 练习六*/}
                    <div className="demo-item">
                        <h2 className="item-title">练习6：模拟数据绑定</h2>
                        <div className="item-desc">
                            <AsyncText></AsyncText>
                        </div>
                    </div>

                    {/* 练习七*/}
                    <div className="demo-item">
                        <h2 className="item-title">练习7：定时任务</h2>
                        <div className="item-desc">
                            <FlashLight></FlashLight>
                        </div>
                    </div>

                    {/* 练习八*/}
                    <div className="demo-item">
                        <h2 className="item-title">练习8：ajax请求</h2>
                        <div className="item-desc">
                            <UserGist url="https://api.github.com/users/octocat/gists"></UserGist>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
