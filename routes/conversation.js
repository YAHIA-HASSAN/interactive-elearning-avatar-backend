const express = require('express')
const router = express.Router()
const conversationController = require('../controllers/conversationController')
const conversationValidator = require('../middlewares/conversationValidatorMiddleware')

//Request All Conversations
router.get('/all/', conversationController.getAllConversations)
//Request One Conversation
router.get('/', conversationController.getConversationById)
//Request Add new Conversation
router.post('/', conversationValidator, conversationController.addNewConversation)
//Request Update Conversation
router.put('/', conversationValidator, conversationController.updateConversationById)
//Request Delete Conversation
router.delete('/', conversationController.deleteConversationById)
module.exports = router
