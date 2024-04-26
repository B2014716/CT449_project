const router = require("express").Router();
const BorrowController = require("../controllers/borrowController");
router.post("/", BorrowController.addBorrowBooks);
router.delete("/:id", BorrowController.deleteBorrowBook);
router.get("/", BorrowController.getAllBorrowBooks);
router.get("/:id", BorrowController.getABorrowBooks);
module.exports = router;
