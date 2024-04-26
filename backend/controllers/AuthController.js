const admin = require("../model/admin");
const bcrypt = require("bcrypt");
const authController = {
  registerAdmin: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      // tạo
      const Admin = await new admin({
        username: req.body.username,
        password: hashed, // Sử dụng biến hashed ở đây, không phải req.hashed
      });
      // lưu
      const savedAdmin = await Admin.save();
      res.status(200).json(savedAdmin);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  loginAdmin: async (req, res) => {
    try {
      const Admin = await admin.findOne({ username: req.body.username });
      if (!Admin) {
        return res.status(404).json({
          message: "Wrong username",
        });
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        Admin.password
      );
      if (!validPassword) {
        return res.status(404).json({
          message: "Wrong password",
        });
      }
      res.json({ success: true });
    } catch (e) {
      return res.status(500).json(e);
    }
  },
};
module.exports = authController;
