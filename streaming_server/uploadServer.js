const express = require('express')
const path = require('path')
const fs = require('fs')
const formidable = require('formidable')
const bodyParser = require('body-parser')
const routes = require('./handlers/index.route')
const methodOverride = require('method-override')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride())

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'my-header,X-Requested-With,content-type,Authorization,cache-control')

  // intercept OPTIONS method
  console.log(req.method)
  if ('OPTIONS' === req.method) {
    res.sendStatus(200)
  } else {
    next()
  }
}

app.use(allowCrossDomain);
app.use('/', routes)

module.exports = app

app.listen(8889, () => {
  console.log('start upload server at 8889')
})
