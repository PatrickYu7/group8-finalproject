import { Router } from "express";
import {
  rate,
  addReview,
  getReviews,
  addCourse,
  getCourses,
  getUserReviews,
} from "../controllers/course.controller.js";

export default {
  route: "/course",
  router: () => {
    const router = Router();

    router.post("/rate", rate);

    router.get("/", getCourses);

    router.post("/addReview", addReview);

    router.post("/getReviews", getReviews);

    router.post("/addCourse", addCourse);

    router.post("/getUserReviews", getUserReviews);

    return router;
  },
};
