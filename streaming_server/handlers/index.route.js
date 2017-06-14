const router = require('express').Router()
const UploadHandler = require('./uploadHandler')

router.route('/upload', UploadHandler.upload)

module.exports = router
