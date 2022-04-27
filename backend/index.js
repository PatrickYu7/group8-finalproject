import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const bodyParser = require("body-parser");

import CourseRouter from "./routes/course.route.js";
import ReviewRouter from "./routes/review.route.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const database = process.env.DATABASE_URI;
mongoose
  .connect(database)
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.use(CourseRouter.route, CourseRouter.router());
app.use(ReviewRouter.route, ReviewRouter.router());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
