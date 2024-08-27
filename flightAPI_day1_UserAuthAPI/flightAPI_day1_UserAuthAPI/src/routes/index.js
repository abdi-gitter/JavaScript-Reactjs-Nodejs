const router = require('express').Router();
const User = require('./user')
const Auth = require('./auth')

// Home path:
router.all('/', (req, res)=>{
    res.send({
        error: false,
        message: 'Welcome to the FLIGHT RESERVATION API',
        documentation: '/documentation',
        user: 'user data...'
    })
})

// users:
router.use('/users', User)

// auth:
router.use('/auth', Auth)

module.exports = router