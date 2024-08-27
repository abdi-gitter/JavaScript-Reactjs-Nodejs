// We need to use the User model.
const User = require('../models/user')

// We need JWT.
const jwt = require('jsonwebtoken')

// bring in the pwEncryption function:
const pwEncrypt = require('../helpers/pwEncrypt')

// bring in the setToken function:
const setToken = require('../helpers/setToken')

module.exports = {
    login: async (req, res)=>{
        const { username, password } = req.body
        // make sure the user entered a username and password...
        if (username && password){

            const user = await User.findOne({ username })
            console.log("user: " + user)

            // make sure we found a matching user...
            if(user && pwEncrypt(password)==user.password){
                // check if user is active...
                if(user.isActive){
                    // send a response with error: false and a token
                    res.send({
                        error: false,
                        token: setToken(user)
                    })
                } else {
                    res.errorStatusCode = 401
                    throw new Error('This account is not active.')
                }
            } else {
                res.errorStatusCode = 401
                throw new Error('Invalid username or password')
            }
        } else {
            res.errorStatusCode = 400
            throw new Error('Username and password are required')
        }

    },

    refresh: async (req, res)=>{
        const refreshToken = req.body?.token?.refresh

        if (refreshToken) {

            jwt.verify(refreshToken, process.env.REFRESH_KEY, async function (err, userData) {

                if (err) {

                    res.errorStatusCode = 401
                    throw err
                } else {

                    const { _id, password } = userData

                    if (_id && password) {

                        const user = await User.findOne({ _id })

                        if (user && user.password == password) {

                            if (user.isActive) {

                                res.send({
                                    error: false,
                                    token: setToken(user, true) // issue new tokens
                                })

                            } else {

                                res.errorStatusCode = 401
                                throw new Error('This account is not active.')
                            }
                        } else {

                            res.errorStatusCode = 401
                            throw new Error('Wrong id or password.')
                        }
                    } else {

                        res.errorStatusCode = 401
                        throw new Error('Please enter id and password.')
                    }
                }
            })

        } else {
            res.errorStatusCode = 401
            throw new Error('Please enter token.refresh')
        }
    },

    logout: async (req, res)=>{
        console.log("LOGOUT!")
        res.send({
            error: false,
            message: 'To logout, delete the token from the client.'
        })
    }
}