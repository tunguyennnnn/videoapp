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
import Main from './pages/Main'


const app = document.getElementById('app')
ReactDom.render(
  <Router history={browserHistory}>
    <Route path='/' component={FrontPage} />
    <Route path='/myPage' comonent={MyPage} />
  </Router>
, app)
