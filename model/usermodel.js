const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/crudpage");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
