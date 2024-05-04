const express = require("express");
const router = express.Router();
const validator = require("../middlewares/authValidatorMiddleware")
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", validator,async (req, res) => {
  // Check email
  let user = await UserModel.findOne({ "U_Email": req.body.U_Email }).exec();
  if (!user) return res.status(400).send({"status":"Invalid email"});

  // Check password
  const validPassword = await bcrypt.compare(req.body.U_Password, user.U_Password);
  if (!validPassword) return res.status(400).send({"status":"Invalid password"});
  
  const token = jwt.sign({ U_ID: user._id }, process.env.TOKEN_SECRET);
  res.header("x-auth-token", token);
  // Send res
  res.status(200).send({"status":"login-successfuly"})

});

module.exports = router;
