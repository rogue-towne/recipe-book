const express = require('express')
const router = express.Router()

router.use('/', require('./home'));
router.use('/user', require('./user'));
router.use('/recipe', require('./recipe'));
router.use('/', require('./swagger'));

module.exports = router;