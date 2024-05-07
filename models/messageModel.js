// 1) Import mongoose
const mongoose = require("mongoose");

// 3) Create Schema
const messageSchema = new mongoose.Schema({
  M_Time: {
    type: Date,
    default: new Date().toISOString(),
    required: true,
    trim: true,
    // match to YYYY-MM-DDTHH:MM:SS.sssZ TimeDate format
    match: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/g,
  },
  M_UserMessage: {
    type: Boolean,
    required: true,
  },
  M_Text: {
    type: Array,
    required: true,
    trim: true,
    minlength: 1,
  },
  C_ID: {
    type: Object,
    // required: true,
    trim: true,
  },
  M_Action:{
    type: Array,
    trim: true,
  }
});

// 4) Create Model
const Message = mongoose.model("messages",messageSchema);

module.exports = Message;