const Promise = require('bluebird')
const mongoose = require('mongoose')
const _ = require('lodash')
const Schema = mongoose.Schema
const validate = require('moongoose-validator')

const nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [2, 20],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: false,
    message: 'Name should contain alpha-numeric characters only'
  })
]

const emailValidator = [
  validate({
    validator: 'matches',
    arguments: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  })
]

const passwordValidator = [
  validate({
    validator: 'isLength',
    arugment: [8, 20],
    message: 'Password length should be at least 8 characters'
  })
]
const UserSchema = new Schema({
  firstName: {
    type: String,
    validate: nameValidator
  },
  lastName: {
    type: String,
    validate: nameValidator
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    unique: true,
    validator: emailValidator
  },
  password: {
    type: String,
    validator: passwordValidator
  },
  posted: {
    type: [Schema.Types.ObjectId],
    default: []
  },
  favourite: {
    type: [Schema.Types.ObjectId],
    default: []
  }
}, {collection: 'User'})

UserSchema.statics = {

}

module.export = UserSchema
