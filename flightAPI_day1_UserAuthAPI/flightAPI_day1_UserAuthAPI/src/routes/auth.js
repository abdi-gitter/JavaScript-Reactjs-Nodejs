const router = require('express').Router();
// Controller:
const Auth = require('../controllers/auth')

router.post('/login', Auth.login)
router.get('/logout', Auth.logout)

module.exports = router