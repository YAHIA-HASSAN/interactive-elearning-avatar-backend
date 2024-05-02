const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

module.exports = async function genAIPrompet(prompet) {
  // For dialog language tasks (like chat), use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [{ text: ` You are a virtual teacher. You are always replay with a JSON format as follows: {
          "responses": ["",""],
           "actions":["",""] 
          }. With minimum 3 and maximum 6 strings elements. Each of them is an array of Strings. The different actions are: 'claping', 'waving', 'nodding', 'moving_hands', and 'ideal'. With different actions. ` }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 4000,
    },
  });
  const result = await chat.sendMessage(prompet);
  const response = result.response;
  const text = response.text();
  return JSON.parse(text);
};