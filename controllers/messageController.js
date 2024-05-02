const Message = require("../models/messageModel"); // Assuming your message model is in '../models'
const fs = require("fs");

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

    // Save both user and avatar messages
    const savedMessages = await Promise.all([
      newUserMessage.save(),
      newAvatarMessage.save(),
    ]);

    const jsonData = savedMessages;

    // Set the response headers
    res.setHeader("Content-Type", "application/octet-stream"); // Set for zip file
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=audio_files.zip"
    ); // Set filename
    res.setHeader("Message-Data", JSON.stringify(jsonData)); // Add JSON data as a custom header

    res.sendFile(req.filePath, (err) => {
      if (err) {
        res.status(500).json({ error: "Error sending file" });
      }
      fs.unlink(req.filePath, (err) => {
        if (err) {
          console.error("Error removing file:", err);
        } 
      });
    });
  } catch (err) {
    console.error("Error saving messages:", err);
    res.status(500).json({ error: "An error occurred while saving messages." });
  }
};

// Function to get all messages within a conversation by conversation ID
exports.getMessagesByConversationId = async (req, res) => {
  try {
    const messages = await Message.find({ "C_ID._id": req.body.C_ID });
    if (!messages) {
      return res
        .status(404)
        .json({ message: "No messages found for this conversation" });
    }
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to get a specific message by ID
exports.getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.body.M_ID);
    if (!message) {
      return res.status(404).json({ message: "Message not found" });
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
    const deletedMessage = await Message.findByIdAndDelete(req.body.M_ID);
    if (!deletedMessage) {
      return res.status(404).json({ message: "Message not found" });
    }
    res.json({ message: "Message deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
