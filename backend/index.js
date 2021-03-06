import express from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import CourseRouter from "./routes/course.route.js";
import ReviewRouter from "./routes/review.route.js";
const user = require("./routes/user.route.cjs");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const database =
  "mongodb://127.0.0.1:27017/final?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.3.1";
mongoose
  .connect(database)
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.use(CourseRouter.route, CourseRouter.router());
app.use(ReviewRouter.route, ReviewRouter.router());
app.use(bodyParser.json());
app.use("/user.route", user); //?

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
