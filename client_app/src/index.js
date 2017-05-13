import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.js'


import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Layout from "./pages/Layout"


const app = document.getElementById('app')
ReactDom.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
    </Route>
  </Router>
, app)
