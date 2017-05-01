const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const compress = require('compression')
const methodOverride = require('method-override')
const expressWinston = require('express-winston')
const helmet = require('helmet')

const winstonInstance = require('./winston')
const config = require('./env')
const expressValidator = require('express-validator')

const app = express()

if (config.env === 'development') {
  app.use(logger('dev'))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator())
app.use(compress())
app.use(methodOverride())
app.use(helmet())

expressWinston.requestWhitelist.push('body')
expressWinston.responseWhitelist.push('body')
app.use(expressWinston.logger({
  winstonInstance,
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
  colorStatus: true
}))

app.set('superSecret', config.secret)

module.exports = app
