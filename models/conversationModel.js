// 1) Import mongoose
const mongoose = require("mongoose");

// 3) Create Schema
const conversationSchema = new mongoose.Schema({
    C_Time: {
        type: Date,
        default: Date.now,
        required: true,
        trim: true,
        // match to YYYY-MM-DDTHH:MM:SS.sssZ TimeDate format
        match: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/g,
    },
    C_Title:{
        type: String,
        required: true,
        trim: true,
    },
    U_ID:{
        type: Object,
        // required: true,
        trim: true,
    },
    F_ID:{
        type: Object,
        required: false,
        trim: true,
    }
});

// 4) Create Model
const Conversation = mongoose.model("conversations", conversationSchema);



module.exports = Conversation;