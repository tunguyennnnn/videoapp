const express = require('express')
const router = express.Router()
const MediaCtrl = require('../controllers/user.controller')

router.route('/')
  .get(MediaCtrl.getAll)
  

module.exports = router
