const router = require('express').Router();
// Bring in user controller:
const User = require('../controllers/user')
// bring in permissions for isLogin:
const { isLogin, isStaff, isAdmin } = require('..//middleware/permissions')

router.route('/')
    .get(isStaff, User.list)
    .post(isAdmin, User.create)

router.route('/:id')
    .get(isStaff, User.read)
    .put(isAdmin, User.update)
    .patch(isAdmin, User.update)
    .delete(isAdmin, User.delete)

module.exports = router