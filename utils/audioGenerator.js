const fs = require("fs");
const path = require("path");
const archiver = require("archiver"); // Import the archiver module
const gTTS = require("gtts");

// Directory where audio files will be saved
const audioDirectory = path.join(__dirname, "mp3");

// Ensure the directory exists, if not, create it
if (!fs.existsSync(audioDirectory)) {
  fs.mkdirSync(audioDirectory, { recursive: true });
}

function generateAudio(text, index) {
  return new Promise((resolve, reject) => {
    const fileName = `audio_${Date.now()}-${index}.mp3`; // Unique file name
    const outputPath = path.join(audioDirectory, fileName);

    var gtts = new gTTS(text, "en");
    gtts.save(outputPath, function (err) {
      if (err) {
        console.error(err);
        reject(err); // Reject the promise if there's an error
      } else {
        resolve(outputPath); // Resolve the promise with the output path
      }
    });
  });
}

module.exports = async (texts) => {
  const audioFilePaths = [];

  try {
    // Generate audio for each text
    for (let i = 0; i < texts.length; i++) {
      const filePath = await generateAudio(texts[i], i);
      audioFilePaths.push(filePath);
    }

    // Create a zip file containing all audio files
    const zipFileName = `audio_files${Date.now()}.zip`;
    const zipFilePath = path.join(audioDirectory, zipFileName);
    const output = fs.createWriteStream(zipFilePath);
    const archive = archiver("zip", {
      zlib: { level: 9 }, // Set compression level
    });

    archive.pipe(output);
    audioFilePaths.forEach((filePath, index) => {
      archive.append(fs.createReadStream(filePath), {
        name: `audio_${Date.now()}-${index}.mp3`,
      });
    });
    await archive.finalize();

    for (let filePath of audioFilePaths) {
      fs.unlinkSync(filePath); // Delete the audio files
    }
    return zipFilePath;
  } catch (err) {
    console.error(err);
    throw err; // Propagate the error to the caller
  }
};
