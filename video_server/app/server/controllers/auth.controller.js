const User = require('../models/user.model')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
mongoose.Promise = require('bluebird')

const login = (req, res, next) => {
  const {email, password} = req.body
  User.findOne({email})
    .then((user) => {
      if (user) {
        if (password === user.password) {
          const expiresAt = Math.floor(Date.now() / 1000) + (60 * 60 * 24)
          const {firstName, lastName, email, password} = user
          const accessToken = jwt.sign({
            exp: expiresAt,
            data: {firstName, lastName, email, password}
          }, 'secret')
          res.status(200).json({success: true, accessToken, expiresAt})
        } else {
          res.status(400).json({success: false})
        }
      } else {
        res.status(400).json({success: false})
      }
    })
    .catch((err) => {
      res.status(500).send()
    })
}


module.exports = {login}
