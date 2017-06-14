const router = require('express').Router()
const UploadRoute = require('./uploadRoute')

router.use('/upload', UploadRoute)

module.exports = router
