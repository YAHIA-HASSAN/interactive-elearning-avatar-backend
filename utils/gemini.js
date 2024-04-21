const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

module.exports = async function genAIPrompet(prompet) {
  // For dialog language tasks (like chat), use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat();

  const msg = `you arer a virual teacher avatar and a student asks you: '${prompet}'.
    you have the following actions to peform ["clap", waving", "nod", "moving hands", "ideal"]
    you always reply in json format as following:
    {
        "response":"",
        "action":"",
    }`;

  const result = await chat.sendMessage(msg);
  const response = result.response;
  const text = response.text();
  return JSON.parse(text);
};
