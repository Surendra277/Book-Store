import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/book.routes.js";
import userRouter from "./routes/user.routes.js";
const app = express();
import path from "path";
import orderRouter from "./routes/order.routes.js";
const __dirname = path.resolve();

dotenv.config();
app.use(cors());
const port = process.env.PORT || 3001;
const db = process.env.DB_URI;
try {
  mongoose.connect(db);

  console.log("connected to MongoDB using mongosse");
} catch (error) {
  console.log(error);
}
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", routes);
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, (req, res) => {
  console.log(`Server is running on ${port}`);
});
