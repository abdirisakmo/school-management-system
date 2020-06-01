const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
  },
  orderSequency: {
    type: Number,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});
module.exports = className = mongoose.model("Class", classSchema);
