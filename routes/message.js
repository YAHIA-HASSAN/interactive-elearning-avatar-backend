const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const messageResponseMiddleware = require('../middlewares/messageResponseMiddleware');
const messageValidationMiddleware = require('../middlewares/messageValidatorMiddleware');


// Route to create a new message within a conversation
router.post('/', messageValidationMiddleware, messageResponseMiddleware, messageController.addMessage);

// Route to get all messages within a conversation by conversation ID
router.get('/all/', messageController.getMessagesByConversationId);

// Route to get a specific message by ID (optional)
router.get('/', messageController.getMessageById); // Replace ':messageId' with actual path parameter name if different

// // Route to update a message by ID (optional)
// router.put('/:messageId', messageController.updateMessageById); // Replace ':messageId' with actual path parameter name if different

// Route to delete a message by ID (optional)
router.delete('/', messageController.deleteMessageById); // Replace ':messageId' with actual path parameter name if different

module.exports = router;
