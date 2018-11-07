import React from 'react'
import {
  Col, Card, Icon,
} from 'antd'
import b1 from 'images/qige.jpg'
import b2 from 'images/zhaoge.jpg'
import b3 from 'images/yu.jpg'
import b4 from 'images/xiaoshuang.jpg'

const MsgBanner = () => (
  <Col span={8}>
    <div className="cloud-box">
      <Card>
        <div className="pb-m">
          <h3>消息栏</h3>
        </div>
        <span className="card-tool"><Icon type="sync" /></span>
        <ul className="list-group no-border">
          <li className="list-group-item">
            <a className="pull-left w-40 mr-m">
              <img src={b1} className="img-responsive img-circle" alt="test" />
            </a>
            <div className="clear">
              <a className="block">奇哥</a>
              <span className="text-muted"> 睡后收入过千万 </span>
            </div>
          </li>
          <li className="list-group-item">
            <a className="pull-left w-40 mr-m">
              <img src={b2} className="img-responsive img-circle" alt="test" />
            </a>
            <div className="clear">
              <a className="block">钊钊</a>
              <span className="text-muted"> 开心，娶媳妇，发糖了 </span>
            </div>
          </li>
          <li className="list-group-item">
            <a className="pull-left w-40 mr-m">
              <img src={b3} className="img-responsive img-circle" alt="test" />
            </a>
            <div className="clear">
              <a className="block">雨</a>
              <span className="text-muted"> 去全世界旅游吃好吃的 </span>
            </div>
          </li>
          <li className="list-group-item">
            <a className="pull-left w-40 mr-m">
              <img src={b4} className="img-responsive img-circle" alt="test" />
            </a>
            <div className="clear">
              <a className="block">小爽</a>
              <span className="text-muted"> 我要做一个小猪佩奇 </span>
            </div>
          </li>
        </ul>
      </Card>
    </div>
  </Col>)

export default MsgBanner
