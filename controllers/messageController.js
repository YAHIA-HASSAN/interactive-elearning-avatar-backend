const Message = require("../models/messageModel"); // Assuming your message model is in '../models'

// Function to create a new message within a conversation
exports.addMessage = async (req, res) => {
  try {
    // Validate user message data 
    const newUserMessage = new Message({
      M_Time: req.body.M_Time, // Timestamp of message
      C_ID: req.body.C_ID, // Conversation ID
      M_UserMessage: true, // Boolean indicating user or system message
      M_Text: req.body.M_Text, // Message content
    });

    // Validate avatar message data (optional)
    // Consider validating the structure of req.avatarMessage to ensure expected properties exist

    const newAvatarMessage = new Message({
      M_Time: req.avatarMessage.M_Time, // Timestamp of message
      C_ID: req.avatarMessage.C_ID, // Conversation ID
      M_UserMessage: false, // Boolean indicating user or system message
      M_Text: req.avatarMessage.M_Text, // Message content
      M_Action: req.avatarMessage.M_Action, // Action performed by avatar
    });

    await Promise.all([newUserMessage.save(), newAvatarMessage.save()]);
    const savedMessages = [newUserMessage, newAvatarMessage]; // Assuming you want both saved messages in the response

    res.status(201).json(savedMessages);
  } catch (err) {
    console.error("Error saving messages:", err);
    // Handle specific Mongoose errors (optional)
    // You can check for specific Mongoose errors (e.g., validation errors, duplicate key errors) and provide more informative error messages to the client
    res.status(500).json({ error: "An error occurred while saving messages." });
  }
};


// Function to get all messages within a conversation by conversation ID
exports.getMessagesByConversationId = async (req, res) => {
  try {
    const messages = await Message.find({ C_ID: req.params.conversationId });
    if (!messages) {
      return res.status(404).json({ message: 'No messages found for this conversation' });
    }
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to get a specific message by ID
exports.getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.messageId);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// // Function to update a message by ID
// exports.updateMessageById = async (req, res) => {
//   try {
//     const updatedMessage = await Message.findByIdAndUpdate(
//       req.params.messageId,
//       req.body,
//       { new: true } // Return the updated document
//     );
//     if (!updatedMessage) {
//       return res.status(404).json({ message: 'Message not found' });
//     }
//     res.json(updatedMessage);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// Function to delete a message by ID
exports.deleteMessageById = async (req, res) => {
  try {
    const deletedMessage = await Message.findByIdAndDelete(req.params.messageId);
    if (!deletedMessage) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json({ message: 'Message deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


