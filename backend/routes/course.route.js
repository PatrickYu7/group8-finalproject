import { Router } from "express";
import {
  rate,
  addReview,
  getReviews,
  addCourse,
  getCourses,
} from "../controllers/course.controller.js";

export default {
  route: "/course",
  router: () => {
    const router = Router();

    router.post("/rate", rate);

    router.get("/", getCourses);

    router.post("/addReview", addReview);

    router.get("/getReviews", getReviews);

    router.post("/addCourse", addCourse);

    return router;
  },
};
