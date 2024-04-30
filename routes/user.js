const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const userValidator = require('../middlewares/userValidatorMiddleware')

//Request All users
router.get('/', userController.getAllUsers)
//Request One user
router.get('/', userController.getUserByEmail)
//Request Add new user
router.post('/', userValidator, userController.addNewUser)
//Request Update user
router.put('/', userValidator,userController.updateUserByEmail)
//Request Delete user
router.delete('/', userController.deleteUserByEmail)
module.exports = router
