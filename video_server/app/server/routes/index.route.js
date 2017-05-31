const express = require('express')
const router = express.Router()
const userRoutes = require('./user.route')
const mediaRoutes = require('./media.route')
const applicationCtrl = require('../controllers/application.controller')


router.use('/users', userRoutes)
router.use('/media', mediaRoutes)

module.exports = router
