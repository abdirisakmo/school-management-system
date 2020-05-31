const mongoose = require("mongoose");

const subjectShema = new mongoose.Schema({
  subjectName: {
    type: String,
    required: true,
    minlength: 3,
  },
  subjectCode: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 5,
    unique: true,
  },
  class: {
    type: String,
    required: true,
    //ref comes here
  },
  teacher: {
    type: String,
    required: true,
    //ref comes here
  },
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = subject = mongoose.model("Subjects", subjectShema);
