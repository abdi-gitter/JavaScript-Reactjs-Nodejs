const { mongoose } = require('../config/dbConnect')
// PWencrypt function:
const pwEncrypt = require('../helpers/pwEncrypt')

/*
{
  "username": "staff",
  "password": "1234",
  "email": "test1@site.com",
  "isActive": true,
  "isStaff": true,
  "isAdmin": false
}
*/

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    password: {
        type: String,
        trim: true,
        required: true,
        set: (pw)=>pwEncrypt(pw)
    },

    email:{
        type: String,
        trim: true,
        required: [true, 'Email is required'],
        validate:[
            (email)=>{
                const emailRegexCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                return emailRegexCheck.test(email)
            },
            'Invalid email'
        ]

    },

    isActive:{
        type: Boolean,
        default: true
    },

    isStaff:{
        type: Boolean,
        default: false
    },

    isAdmin:{
        type: Boolean,
        default: false
    }

},
{
    timestamps: true,
    collection: 'users'
})

// Schema. Done.

// Now create Model:
module.exports = mongoose.model('User', UserSchema)