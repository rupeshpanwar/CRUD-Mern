const express = require('express');
const router = express.Router()

//import controllers
const { create } = require('../controllers/post')

router.post('/post', create)

module.exports = router;

