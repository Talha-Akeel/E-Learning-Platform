const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const comment_reply_model = new Schema({
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
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comments"
  }
});

module.exports = model('Comment-replies', comment_reply_model);