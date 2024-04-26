const Borrow = require("../model/borrow");
const BorrowController = {
  addBorrowBooks: async (req, res) => {
    try {
      const newBorrowBook = new Borrow(req.body);
      console.log(req.body);
      const saveBorrowBook = await newBorrowBook.save();
      res.status(200).json(saveBorrowBook);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  deleteBorrowBook: async (req, res) => {
    try {
      await Borrow.findByIdAndDelete(req.params.id);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  getAllBorrowBooks: async (req, res) => {
    try {
      const allBorrowBooks = await Borrow.find();
      res.status(200).json(allBorrowBooks);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  getABorrowBooks: async (req, res) => {
    try {
      const aborrowBook = await Borrow.findById(req.params.id).populate("Book");
      res.status(200).json(aborrowBook);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
};
module.exports = BorrowController;
