import React from 'react'
import { Tabs } from 'antd'
import Age from './components/age'
import Bmi from './components/bmi'
import Salary from './components/salary'
import House from './components/house'
import './index.less'

const { TabPane } = Tabs

const Tools = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="工资帽" key="1"><Salary /></TabPane>
        <TabPane tab="房租" key="2"><House /></TabPane>
        <TabPane tab="身体指数" key="3"><Bmi /></TabPane>
        <TabPane tab="多大了" key="4"><Age /></TabPane>
        <TabPane tab="请联系wangshuang催她完成" key="5" disabled>之后再做吧</TabPane>
      </Tabs>
    </div>
  )
}

export default Tools
