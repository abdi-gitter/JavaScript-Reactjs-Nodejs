module.exports = {
    isLogin: (req, res, next) => {
        // remember we already have access to all user data on the req.user object

        // if we're in production, we know what we're doing and we don't want to play around
        // with tokens and copying and pasting and logging in etc.

        if (process.env.NODE_ENV == 'development') {
            console.log('No need for permissions, we are in development...')
            return next()
        } else {
            console.log('Production mode.  Checking permissions...')
        }

        if (req.user) {
            console.log('User is logged in.  Proceeding...')
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error("You must be logged in to access this resource.")
        }
    },

    isStaff: (req, res, next) => {

        if (process.env.NODE_ENV == 'development') {
            console.log('No need for permissions, we are in development...')
            return next()
        } else {
            console.log('Production mode.  Checking permissions...')
        }

        if (req.user && req.user.isStaff) {
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error("You must be a staff member to access this resource.")
        }
    },

    isAdmin: (req, res, next) => {
        if (process.env.NODE_ENV == 'development') {
            console.log('No need for permissions, we are in development...')
            return next()
        } else {
            console.log('Production mode.  Checking permissions...')
        }

        if (req.user && req.user.isAdmin) {
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error("You must be an admin to access this resource")
        }
    }
}