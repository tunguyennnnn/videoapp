const Media = require('../models/media.model')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

function validateLimit (query) {
  let limit = parseInt(query.limit, 10)
  if (isNaN(limit)) {
    limit = 10
  } else if (limit > 50 || limit < 1) {
    limit = 10
  }
  return limit
}

function validateSkip (query) {
  let skip = parseInt(query.skip, 10)
  if (isNaN(skip) || skip < 0) {
    skip = 0
  }
  return skip
}

const getAll = (req, res, next) => {
  let {limit, skip} = req.params
  limit = validateLimit(limit)
  skip = validateSkip(skip)
  Media.getAll({limit, skip})
    .then((media) => {
      res.status(200).json(media)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
}
