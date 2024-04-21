// 1) Import mongoose
const mongoose = require("mongoose");

// 3) Create Schema
const pdfFileSchema = new mongoose.Schema({
  F_Path:{
    type:String,
    required:true
  },
  U_ID:{
    type:Object,
    required:true,
  }
});

// 4) Create Model
const pdfFile = mongoose.model("pdf_files", userSchema);



module.exports = pdfFile;