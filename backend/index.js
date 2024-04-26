const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bookRoutes = require("./routes/book");
const AuthRouter = require("./routes/auth");
const BorrowRouter = require("./routes/borrow");
dotenv.config();
async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://tub2014716:Tub2014716@cluster0.cal4l2w.mongodb.net/"
    );
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}
connectToDatabase();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));
app.use("/api/book", bookRoutes);
app.use("/api/auth", AuthRouter);
app.use("/api/borrow", BorrowRouter);
app.listen(8000, () => {
  console.log("server listening on 8000");
});
