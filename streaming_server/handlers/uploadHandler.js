const formidable = require('formidable')
const Promise = require('bluebird')
const path = require('path')
const fs = require('fs')

const upload = (req, res, next) => {
  const form = new formidable.IncomingForm()
  form.multiples = true
  const {type, id} = req.body
  form.uploadDir = (path.join(__dirname, '/videos'))
  form.on('file', (field, file) => {
    fs.rename(file.path, path.join(form.uploadDir, file.name))
  })

  form.on('error', (err) => {
    res.send(err)
  })

  form.on('end', () => {
    res.send('success')
  })
}
