const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const enrollment_model = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Courses",
    required: true
  },
  payment_status: {
    type: Boolean,
    required: true
  },
  date: {
    type: String,
  }
});

module.exports = model('enrollments', enrollment_model);