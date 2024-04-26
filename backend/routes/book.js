const router = require("express").Router();
const bookController = require("../controllers/bookcontroller");
router.post("/", bookController.addBook);
router.get("/", bookController.getAllBook);
router.get("/:id", bookController.getABook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);
module.exports = router;
