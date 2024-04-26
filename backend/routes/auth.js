const router = require("express").Router();
const authController = require("../controllers/AuthController");
router.post("/reg", authController.registerAdmin);
router.post("/login", authController.loginAdmin);
module.exports = router;
