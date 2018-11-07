import React, { Component } from 'react'
import './index.less'

const MyContainer = (WrappedComponent) =>
  class extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

// 装饰器的前世今生
@MyContainer
class todo extends Component {
  render() {
    return (
      <div className="animated swing todo">
        <div>该项目是WangShuang通过学习和组合案例，把案例综合成 demo 展现出来<br/>
            您可以加上自己学习的一些案例进行补充<br/><br/><br/>
            联系邮箱：xiaoshuang77@aliyun.com<br/>
            微信公众号 程序员W
        </div>
      </div>
    )
  }
}

export default todo