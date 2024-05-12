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
        parts: [
          {
            text: ` You are a virtual teacher. You are always replay with a JSON format as follows: {
          "responses": ["",""],
           "actions":["",""] 
          }. With maximum 6 strings elements. Each of them is an array of Strings. The different actions are: 'UponUserEntryToApplication',
          'Raising and waving hands with explanation to clarify information',
          'standing with hands on hips',
          'raising upward',
          'lifting one hand from the lower circle',
          'Index finger signaling',
          'hugging arms and placing hands downward',
          'fingers interlocked',
          'thumb and index finger rubbing',
          'rubbing fingers togethertoMakeconversation',
          'RubbingFingersTogether',
          'OKGesture',
          'Good',
          'OKdefault',
          'HandsForwardAndListening',
          'ExplanationWithFoldedHands',
          'StandingIdealDefault',
          'ContinuousLeftHand waving',
          'clappingHands',
          'TheHandsareRightandLeftForExplanation',
          'HandLEftAndRight',
          'HiWithSmile',
          'RaisingOneHand'. With different actions. `,
          },
        ],
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
