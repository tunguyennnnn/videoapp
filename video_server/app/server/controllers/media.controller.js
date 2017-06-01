const Media = require('../models/media.model')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

function validateLimit (limit) {
  limit = parseInt(limit, 10)
  if (isNaN(limit)) {
    limit = 10
  } else if (limit > 50 || limit < 1) {
    limit = 10
  }
  return limit
}

function validateSkip (skip) {
  skip = parseInt(skip, 10)
  if (isNaN(skip) || skip < 0) {
    skip = 0
  }
  return skip
}

const getAll = (req, res, next) => {
  console.log(req.params)
  let {limit, skip} = req.params
  console.log(limit, skip)
  limit = validateLimit(limit)
  skip = validateSkip(skip)
  console.log(limit, skip)
  Media.getAll({limit, skip})
    .then((media) => {
      res.status(200).json(media)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
}

module.exports = {getAll}
