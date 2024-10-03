const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const comment_model = new Schema({
  content: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  lecture: {
    type: String,
    ref: "lectures"
  }
});

module.exports = model('Comments', comment_model);