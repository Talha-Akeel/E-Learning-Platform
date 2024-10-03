const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const lecture_model = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: [20, 'Title cannot be more than 20 characters.'],
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    maxLength: [100, 'Description cannot be more than 100 characters.'],
    trim: true
  },
  lecture_video: {
    data: Buffer,
    contentType: String
  },
  duration: {
    type: String,
    required: true
  },
  course: {
    type: String,
    ref: "Courses"
  }
});

module.exports = model('lectures', lecture_model);