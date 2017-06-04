import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.js'
import 'uikit/dist/css/uikit.min.css'
import './styles/VideoContainer.css'
import './styles/videoplayer.css'
import './styles/app.css'
import './styles/menuComponents.css'

import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router'
import FrontPage from './pages/FrontPage'
import MyPage from './pages/MyPage'
import LoginPage from './pages/LoginPage'
import {Provider} from 'react-redux'
import store from './Store'

const app = document.getElementById('app')
ReactDom.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={FrontPage}>
        <Route path='/home' component={FrontPage} />
        <Route path='/myPage' component={MyPage} />
      </Route>
    </Router>
  </Provider>
, app)
