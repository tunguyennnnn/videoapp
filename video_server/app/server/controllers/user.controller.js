const User = require('../models/user.model')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const jwt = require('jsonwebtoken')

const createUser = (req, res, next) => {
  const {firstName, lastName, email, password} = req.body
  const newUser = new User({firstName, lastName, email, password})
  return newUser.save()
    .then((user) => {
      const expiresAt = Math.floor(Date.now() / 1000) + (60 * 60 * 24)
      const accessToken = jwt.sign({
        exp: expiresAt,
        data: {firstName, lastName, email, password}
      }, 'secret')
      res.status(202).json({success: true, accessToken, expiresAt})
    })
    .catch((err) => {
      res.status(404).json(err)
    })
}

const updateUser = (req, res, next) => {
  const {email} = req.body
  User.findOne({email: email})
    .then((user) => {
      const {firstName = user.firstName, lastName = user.lastName, password = user.password} = req.body
      user.update({firstName, lastName, password})
        .then((user) => {
          res.status(204)
        })
    })
    .catch((err) => {
      res.status(400).json(err)
    })
}

const getAllUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      res.status(202).json(users)
    })
}

module.exports = {createUser, getAllUsers, updateUser}
