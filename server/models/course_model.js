const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const course_model = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: [20, 'Title cannot be more than 20 characters.'],
    trim: true
  },
  description: {
    type: String,
    required: true,
    maxLength: [100, 'Description cannot be more than 100 characters.'],
    trim: true
  },
  instructor: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  course_image: {
    data: Buffer,
    contentType: String
  },
  category: {
    type: String,
    required: true
  }
});

module.exports = model('Courses', course_model);