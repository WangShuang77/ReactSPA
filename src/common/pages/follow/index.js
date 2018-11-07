import React from 'react'
import { rdColor } from 'diana'
import './index.less'

export default class Follow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      col: '#666',
    }
  }

  // 组件渲染后，500毫秒改变一次组件颜色
  componentDidMount() {
    this.interval = setInterval(this.getRandomColor, 500)
  }

  // 组件将要死亡时清除计时器
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  getRandomColor = () => {
    this.setState({
      col: rdColor(),
    })
  }

  render() {
    const { col } = this.state
    return (
      <div className="animated flip ani-box">
        <div><a href="" className="welcome animated flip text" style={{ color: col }}>微信公众号：程序员W</a></div>
        <img src={require('../../images/face.png')} width="100" alt="logo" className="lastPic" />
        <div className="animated swing discribe">本项目由王爽 基于React全家桶学习完成案例Demo</div>
        <div className="animated swing discribe">
           </div>
      </div>
    )
  }
}
