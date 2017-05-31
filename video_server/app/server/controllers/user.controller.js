const User = require('../models/user.model')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const createUser = (req, res, next) => {
  const {firstName, lastName, email, password} = req.body
  const newUser = new User({firstName, lastName, email, password})
  return newUser.save()
    .then((user) => {
      res.status(202).json(user)
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

module.exports = {createUser}
