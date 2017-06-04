const express = require('express')
const router = express.Router()
const userRoutes = require('./user.route')
const mediaRoutes = require('./media.route')
const auth = require('./auth.route')

router.use('/auth', auth)
router.use('/users', userRoutes)
router.use('/media', mediaRoutes)

module.exports = router
