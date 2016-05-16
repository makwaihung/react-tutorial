import React, { Component } from 'react';

import {

  HelloWorld,
  ComponentDemo,
  ComponentStyle,
  SpreadDemo,
  StateDemo,
  PropsDemo,
  PropTypesDemo,
  LifeCycle,
  DestroyComponent,
  HandleDOMComponent,
  HandleRangeColor,
  HandleEvent,
  SelfCreateComponent,
  UseChildrenComponent,
  FormDemo,
  MixinDemo,
  CommentBox,

} from '../components/exportComponents';

let data = {
  type: 'robot',
  name: 'AlphaGo',
};

let rawStr = '{...obj}';


let commentsData = [

  { "author": "Mak", "date": "5 分钟前", "text": "天气不错！" },
  { "author": "Tom", "date": "2 分钟前", "text": "出去溜达！" }

]

class App extends Component {
  render(){
    return (
      <div>
        <div className="ui content-block">
            <h3 className="ui title">Hello world</h3>
            <hr/>
            <HelloWorld />
        </div>

        <div className="ui content-block">
            <h3 className="ui title">jsx语法</h3>
            <hr/>
            <ComponentDemo name="Mak" />
        </div>

        <div className="ui content-block">
            <h3 className="ui title">组件定义样式</h3>
            <hr/>
            <ComponentStyle />
        </div>

        <div className="ui content-block">
            <h3 className="ui title">通过来 { rawStr } 批量设置一个对象的键值对到组件的属性</h3>
            <hr/>
            <SpreadDemo {...data} />
        </div>

        <div className="ui content-block">
            <h3 className="ui title">state</h3>
            <hr/>
            <StateDemo />
        </div>

        <div className="ui content-block">
            <h3 className="ui title">props</h3>
            <hr/>
            <PropsDemo  title="设置的标题" />
        </div>

        <div className="ui content-block">
            <h3 className="ui title">PropType</h3>
            <hr/>
            <PropTypesDemo title="我是标题" />
        </div>

        <div className="ui content-block">
            <h3 className="ui title">生命周期</h3>
            <hr/>
            <LifeCycle />
        </div>

        <div className="ui content-block">
            <h3 className="ui title">销毁生命周期</h3>
            <hr/>
            <DestroyComponent />
        </div>

        <div className="ui content-block">
          <h3 className="ui title">Handle-dom</h3>
          <hr/>
          <HandleDOMComponent />
          <HandleRangeColor />
        </div>

        <div className="ui content-block">
          <h3 className="ui title">Event事件</h3>
          <hr/>
          <HandleEvent />
        </div>

        <div className="ui content-block">
          <h3 className="ui title">组件</h3>
          <hr/>
          <SelfCreateComponent />
          <UseChildrenComponent />
        </div>

        <div className="ui content-block">
          <h3 className="ui title">表单</h3>
          <hr/>
          <FormDemo />
        </div>

        <div className="ui content-block">
          <h3 className="ui title">Mixin</h3>
          <hr/>
          <MixinDemo />
        </div>

        <div className="ui content-block">
          <h3 className="ui title">评论APP实战</h3>
          <hr/>
          {/*<CommentBox data= { commentsData } />*/}
          <CommentBox url = "./commentData.json" />
        </div>

      </div>
    )
  }
}

export default App;
