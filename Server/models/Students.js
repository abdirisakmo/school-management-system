const mongoose = require("mongoose");

//defining the schema
const StudentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  shift: {
    type: String,
    required: false,
  },
  studentClass: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
});

module.exports = Student = mongoose.model("student", StudentSchema);
