import Courses from "../models/courses.model.js";
import Reviews from "../models/reviews.model.js";

const computeRating = (oldRating, newRating, numRating) => {
  const numerator = oldRating * numRating + newRating;
  const denominator = numRating + 1;
  return numerator / denominator;
};

export const rate = async (req, res) => {
  try {
    const { difficulty, workload, significance, courseID } = req.body;

    const course = await Courses.findOne({ courseID });
    const numRating = course.numRating;
    course.difficulty = computeRating(course.difficulty, difficulty, numRating);
    course.workload = computeRating(course.workload, workload, numRating);
    course.significance = computeRating(
      course.significance,
      significance,
      numRating
    );
    course.numRating = course.numRating + 1;

    await course.save();
    res.status(200).json({ course });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Courses.find();
    res.status(200).json({ courses });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getUserReviews = async (req, res) => {
  const { username } = req.body;
  try {
    let reviews = await Reviews.find({
      username: username,
    });
    if (!reviews) {
      res.json({
        message: "No Reviews",
      });
    } else {
      res.status(200).json({ reviews });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const addReview = async (req, res) => {
  try {
    const { comment, courseID, username } = req.body;
    const data = {
      comment,
      username,
    };
    const review = await Reviews.create(data);
    const course = await Courses.findOne({ courseID });
    course.reviews.push(review._id);
    console.log(course.reviews);
    await course.save();

    res.status(200).json({ review });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getReviews = async (req, res) => {
  try {
    const { courseID } = req.body;
    const reviews = [];

    const course = await Courses.findOne({ courseID });
    console.log(course.reviews);
    for (let review_id of course.reviews) {
      console.log(review_id);
      const review = await Reviews.findById(review_id);
      reviews.push(review);
    }

    res.status(200).json({ reviews });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const addCourse = async (req, res) => {
  try {
    const { courseID, courseName, description } = req.body;
    const course = await Courses.create({ courseID, courseName, description });

    res.status(200).json({ course });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
