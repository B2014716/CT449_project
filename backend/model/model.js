const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  number: {
    type: String,
  },
  publishing: {
    type: String,
  },
  year: {
    type: String,
  },
  author: {
    type: String,
  },
  img: {
    type: String,
  },
});
let book = mongoose.model("Book", bookSchema);

module.exports = { book };
