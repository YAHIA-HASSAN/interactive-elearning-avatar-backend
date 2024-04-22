// 1) Import mongoose
const mongoose = require("mongoose");

// 3) Create Schema
const userSchema = new mongoose.Schema({
  U_FirstName: {
    type: String,
    trim: true,
    maxlength: 60,
    match: /^[A-Z]*/,
    require: true,
  },
  U_MiddleName: {
    type: String,
    trim: true,
    maxlength: 60,
    match: /^[A-Z]*/,
    require: true,
  },
  U_LastName: {
    type: String,
    trim: true,
    maxlength: 60,
    match: /^[A-Z]*/,
    require: true,
  },
  U_Type: {
    type: String,
    trim: true,
    enum: ["A", "V", "R", "K"],
    require: true,
  },
  U_Email: {
    type: String,
    trim: true,
    validate: {
      validator: function (val) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(val);
      },
    },
    minlength: 6,
    maxlength: 200,
    require: true,
    unique: true,
    lowercase: true,
  },
  U_Password: {
    type: String,
    match:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
    minlength: 6,
    maxlength: 200,
    require: true,
  },
  U_Age: {
    type: Number,
    trim: true,
    min: 6,
    max: 110,
    require: true,
  },
});

// 4) Create Model
const User = mongoose.model("users", userSchema);

module.exports = User;
