const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");

require("dotenv").config();

//Connect to DB
mongoose
  .connect(process.env.dbConnectionString)
  .then(() => {
    console.log("database connected...");
  })
  .catch(() => {
    console.log("error occured while DB connecting!");
  });


const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port


// Import routes and utility
const uploadRoute = require("./routes/uploadFile.js");
const conversationRoute = require("./routes/conversation.js");
const messageRoute = require("./routes/message.js");
const userRoute = require("./routes/user.js");

// Middleware for parsing JSON request bodies
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// Register routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use('/upload', uploadRoute);
app.use('/conversation', conversationRoute);
app.use("/user",userRoute);
app.use("/message", messageRoute);

/** catch 404 and forward to error handler */
app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'API endpoint doesnt exist'
  })
});

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port);
/** Event listener for HTTP server "listening" event. */
server.on("listening", () => {
  console.log(`Listening on port:: http://localhost:${port}/`)
});



