const express = require('express')
const router = express.Router()
const UserCtrl = require('../controllers/user.controller')

router.route('/')
  .get(UserCtrl.getAllUsers)
  .post(UserCtrl.createUser)
  .put(UserCtrl.updateUser)

module.exports = router
