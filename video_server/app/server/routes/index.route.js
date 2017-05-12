const express = require('express')
const router = express.Router()
const applicationCtrl = require('../controllers/application.controller')

router.use('/')
  .get(applicationCtrl.allMedias)

module.exports = router
