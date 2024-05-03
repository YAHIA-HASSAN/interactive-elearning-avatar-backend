const { ElevenLabsClient } = require("elevenlabs");
const { createWriteStream } = require("fs");

require("dotenv").config();

const ELEVENLABS_API_KEY = process.env.ELEVEN_LABS_API_KEY;

const client = new ElevenLabsClient({
  apiKey: ELEVENLABS_API_KEY,
});

const createAudioFileFromText = async (text, fileName) => {
  return new Promise(async (resolve, reject) => {
    try {
      const audio = await client.generate({
        voice: "Rachel",
        model_id: "eleven_turbo_v2",
        text,
      });

      fileName = "./utils/mp3/" + fileName;
      const fileStream = createWriteStream(fileName);

      audio.pipe(fileStream);
      fileStream.on("finish", () => resolve(fileName)); // Resolve with the fileName
      fileStream.on("error", reject);
    } catch (error) {
      reject(error);
    }
  });
};

// createAudioFileFromText("Hello world!")

module.exports = { createAudioFileFromText };
