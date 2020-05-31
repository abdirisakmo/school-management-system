const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  grade: {
    grade: {
      type: String,
      required: true,
    },
    point: {
      type: String,
      required: true,
    },
    marksFrom: {
      type: String,
      required: true,
    },
    marksUpto: {
      type: String,
      required: true,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = grade = mongoose.model("Grade", gradeSchema);
