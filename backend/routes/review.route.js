import { Router } from "express";
import { like, dislike } from "../controllers/review.controller.js";

export default {
  route: "/review",
  router: () => {
    const router = Router();

    router.post("/like", like);

    router.post("/dislike", dislike);

    return router;
  },
};
