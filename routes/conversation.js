const express = require('express')
const router = express.Router()
const conversationController = require('../controllers/conversationController')
const conversationValidator = require('../middlewares/conversationValidatorMiddleware')

//Request All Conversations
router.get('/', conversationController.getAllConversations)
//Request One Conversation
router.get('/:C_ID', conversationController.getConversationById)
//Request Add new Conversation
router.post('/', conversationValidator, conversationController.addNewConversation)
//Request Update Conversation
router.put('/:C_ID', conversationValidator, conversationController.updateConversationById)
//Request Delete Conversation
router.delete('/:C_ID', conversationController.deleteConversationById)
module.exports = router
