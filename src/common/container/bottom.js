import React from 'react'
import { Layout } from 'antd'
import './bottom.less'

const { Footer } = Layout

export default class Bottom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0,
    }
  }

  // 组件渲染后开始循环执行tick函数
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }

  // 组件将要死亡时清除计时器，不清除也可以
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick = () => {
    const { timer } = this.state
    this.setState({ timer: timer + 1 })
  }

  render() {
    const { timer } = this.state
    return (
      <Footer className="bottom animated bounceInLeft">
        <div className="text">
          <div>
            <span>©2018 王爽 后台系统学习Demo</span>
            <span className="stay">
              您停留了
              <span className="time">{timer}</span>
              秒，比心
            </span>
          </div>
        </div>
      </Footer>
    )
  }
}