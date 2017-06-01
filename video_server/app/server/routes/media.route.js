const express = require('express')
const router = express.Router()
const MediaCtrl = require('../controllers/media.controller')

router.route('/')
  .get(MediaCtrl.getAll)


module.exports = router
