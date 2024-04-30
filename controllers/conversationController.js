const Conversation = require("../models/conversationModel");

// Function to get all conversations
exports.getAllConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find({U_ID:req.body.U_ID}).select({
      _id: 1,
      C_Title: 1,
      C_Time: 1,
      U_ID: 1,
      F_ID: 1,
    });
    res.json(conversations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to get a conversation by ID
exports.getConversationById = async (req, res) => {
  try {
    const conversation = await Conversation.findById(req.body.C_ID).select({
      _id: 1,
      C_Title: 1,
      C_Time: 1,
      U_ID: 1,
      F_ID: 1,
    });
    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    res.json(conversation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to create a new conversation (assuming validation happens in middleware)
exports.addNewConversation = async (req, res) => {
  try {
    const newConversation = new Conversation(req.body);
    const savedConversation = await newConversation.save();
    res.status(201).json(savedConversation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to update a conversation by ID
exports.updateConversationById = async (req, res) => {
  try {
    const updatedConversation = await Conversation.findByIdAndUpdate(
      req.body.C_ID,
      req.body,
      { new: true } // Return the updated document
    );
    if (!updatedConversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    res.json(updatedConversation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Function to delete a conversation by ID
exports.deleteConversationById = async (req, res) => {
  try {
    const deletedConversation = await Conversation.findByIdAndDelete(
      req.body.C_ID
    );
    if (!deletedConversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    res.json({ message: "Conversation deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
