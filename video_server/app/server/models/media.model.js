const Promise = require('bluebird')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const _ = require('lodash')
const Schema = mongoose.Schema

const MediaSchema = new Schema({
  mediaName: {type: String, default: 'image'},
  path: {type: String, default: ''},
  duration: {type: Number, default: 0},
  thumbnailPath: {type: String, default: ''},
  type: {type: String, default: 'video'},
  authorId: Schema.ObjectId,
  postedDate: {type: Date, default: Date.now}
}, {collection: 'media'})

MediaSchema.statics = {
  getAll ({limit, skip}) {
    console.log('loggggggggg', limit, skip)
    return this.find({})
  }
}

module.exports = mongoose.model('Media', MediaSchema)
