// Import user model:
const User = require('../models/user')

module.exports = {
    list: async (req, res)=>{
        const users = await res.getModelList(User)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(User),
            users
        })
    },

    create: async (req, res)=>{
        const user = await User.create(req.body)

        res.status(201).send({
            error: false,
            user
        })
    },

    read: async( req, res)=>{
        const user = await User.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            user
        })
    },

    update: async (req, res)=>{

        const user = await User.updateOne({ _id: req.params.id }, req.body, {runValidators: true})

        res.status(202).send({
            error: false,
            user,
            updatedUser: await User.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res)=>{
        const user = await User.deleteOne({ _id: req.params.id})

        res.status(user.deletedCount? 204 : 404).send({
            error: !user.deletedCount,
            user
        })
    }
}