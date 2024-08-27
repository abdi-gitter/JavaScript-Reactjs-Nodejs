const jwt = require('jsonwebtoken')

module.exports = (userData, isRefresh = false)=>{

    const data = {
        access: userData.toJSON(),
        refresh: { _id: userData._id, password: userData.password },
        shortExpiresIn: '1h',
        loginExpiresIn: '7d'
    }

    return {
        access: jwt.sign(data.access, process.env.ACCESS_KEY, {expiresIn: data.shortExpiresIn}),
        refresh: (isRefresh ? undefined : jwt.sign(data.refresh, process.env.REFRESH_KEY, {expiresIn: data.loginExpiresIn}))
    }
}