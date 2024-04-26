const mongoose = require("mongoose");
const BorrowBookSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  namebook: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  date_publishing: {
    type: String,
  },
  date_return: {
    type: String,
  },
});
module.exports = mongoose.model("borrow", BorrowBookSchema);
