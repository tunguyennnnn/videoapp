const User = require('../models/user.model')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
mongoose.Promise = require('bluebird')

const login = (req, res, next) => {
  const {email, password} = req.body
  console.log('dasdasdas', email, password)
  User.findOne({email})
    .then((user) => {
      if (user) {
        if (password === user.password) {
          const token = jwt.sign(user, '---------')
          res.json({success: true, accessToken: token})
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
