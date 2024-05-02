const genAIPrompt = require("../utils/gemini"); 
const audioGenerator = require("../utils/audioGenerator");

module.exports = async (req, res, next) => {
  try {
    // Get user message and generate AI response
    const userMessage = req.body.M_Text;
    const geminiResponse = await genAIPrompt(userMessage);
    const filePath = await audioGenerator(geminiResponse.responses);
    
    // Create avatar message object
    const avatarMessage = {
      M_Time: new Date().toISOString(),
      C_ID: req.body.C_ID, // Conversation ID
      M_UserMessage: false, // Boolean indicating system message
      M_Text: geminiResponse.responses,
      M_Action: geminiResponse.actions || "ideal", // Set action if available, otherwise empty string
    };

    // Attach avatar message to request object
    req.avatarMessage = avatarMessage;
    req.filePath = filePath;
    next();
  } catch (err) {
    console.error("Error generating AI response:", err)
    res.status(500).json({ error: "Internal server error: ",err });
  }
};
