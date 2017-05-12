const Promise = require('bluebird')
const mongoose = require('mongoose')
const _ = require('lodash')
const Schema = mongoose.Schema

const MediaSchema = new Schema({
  mediaName: {type: String, default: ''},
  path: {type: String, default: ''},
  duration: {type: Number, default: 0},
  thumbnailPath: {type: String, default: ''},
  type: {type: String, default: 'video'},
  authorId: Schema.ObjectId,
  postedDate: {type: Date, default: Date.now}
})

MediaSchema.statics = {
  addMedia ({mediaName, authorId, duration, thumbnailPath, type}) {

  }
}
