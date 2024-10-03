const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const user_model = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /.+@.+\..+/
  },
  password: {
    type: String,
    minLength: [8, 'Password cannot be less than 8 characters.'],
    required: true
  },
  role: {
    type: String,
    default: 'student',
    enum: ['student', 'teacher']
  },
  profile_pic: {
    data: Buffer,
    contentType: String
  },
});

module.exports = model('Users', user_model);