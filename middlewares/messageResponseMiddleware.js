const genAIPrompt = require("../utils/gemini"); 

module.exports = async (req, res, next) => {
  try {
    // Get user message and generate AI response
    const userMessage = req.body.M_Text;
    const geminiResponse = await genAIPrompt(userMessage);

    // Create avatar message object
    const avatarMessage = {
      M_Time: new Date().toISOString(),
      C_ID: req.body.C_ID, // Conversation ID
      M_UserMessage: false, // Boolean indicating system message
      M_Text: geminiResponse.response,
      M_Action: geminiResponse.action || "", // Set action if available, otherwise empty string
    };

    // Attach avatar message to request object
    req.avatarMessage = avatarMessage;
    next();
  } catch (err) {
    console.error("Error generating AI response:", err);
    // Set a default error message for the avatar
    req.avatarMessage = {
      M_Time: new Date().toISOString(),
      C_ID: req.body.C_ID,
      M_UserMessage: false,
      M_Text: "An error occurred while generating a response. Please try again later.",
      M_Action: "",
    };
    next(); // Allow request to proceed even with error (optional)
  }
};
