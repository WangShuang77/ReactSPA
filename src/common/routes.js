import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import Container from 'container'
import Login from 'pages/login'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const { location } = history

const routes = (
  <HashRouter>
    <div>
      <Route path="/" component={Container} />
      <Route path="/login" component={Login} />
      {location.hash === '#/' ? <Redirect to="/login" /> : ''}
    </div>
  </HashRouter>
  //
  // 项目中可使用如下写法
  // <Switch>
  //   <Route exec path="/" component={Container} />
  //   <Route exec path="/login" component={Login} />
  // </Switch>
)

export default routes
