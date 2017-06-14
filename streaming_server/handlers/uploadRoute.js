const formidable = require('formidable')
const Promise = require('bluebird')
const path = require('path')
const fs = require('fs')
const router = require('express').Router()

const upload = (req, res, next) => {
  console.log(req)
  const form = new formidable.IncomingForm()
  form.multiples = true
  const {type, id} = req.body
  form.uploadDir = (path.join(__dirname, '../images'))
  form.on('file', (field, file) => {
    fs.rename(file.path, path.join(form.uploadDir, file.name))
  })

  form.on('error', (err) => {
    res.send(err)
  })

  form.on('end', () => {
    res.end('success')
  })
  form.parse(req)
}

router.route('')
  .get((req, res, next) => res.send([]))
  .post(upload)

module.exports = router
