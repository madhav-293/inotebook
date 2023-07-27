/* eslint-disable no-undef */
const mongoose = require("mongoose");

const NotesSchema = new Schema({
    title: {
        String,
        required: true
    },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default:'General'
  },
  date: {
    type: Date,
    default: Date.now(), // current time when user is created
  },
});

module.exports = mongoose.model("notes", NotesSchema);
