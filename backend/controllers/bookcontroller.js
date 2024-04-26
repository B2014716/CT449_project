const { book } = require("../model/model");

const bookController = {
  addBook: async (req, res) => {
    try {
      const newBook = new book(req.body);
      const saveBook = await newBook.save();
      res.json({ success: true });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllBook: async (req, res) => {
    try {
      const getALlBook = await book.find();
      res.status(200).json(getALlBook);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getABook: async (req, res) => {
    try {
      const aBook = await book.findById(req.params.id);
      res.status(200).json(aBook);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateBook: async (req, res) => {
    try {
      const Updatebook = await book.findById(req.params.id);
      await Updatebook.updateOne(req.body);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteBook: async (req, res) => {
    try {
      await book.findByIdAndDelete(req.params.id);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = bookController;
