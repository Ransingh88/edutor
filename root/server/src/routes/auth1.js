const express = require('express');
const router = express.Router();

const { login, signup } = require('../controllers/auth')


router.post('/signupp',signup)
router.post('/loginn', login)


module.exports = router;