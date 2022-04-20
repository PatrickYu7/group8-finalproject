import Reviews from "../models/reviews.model.js";

export const like = async (req, res) => {
  try {
    const { review_id } = req.body;
    console.log(review_id);

    const review = await Reviews.findById(review_id);
    console.log(review);
    review.likes = review.likes + 1;
    await review.save();

    res.status(200).json({ review });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const dislike = async (req, res) => {
  try {
    const { review_id } = req.body;

    const review = await Reviews.findById(review_id);
    review.dislikes = review.dislikes + 1;
    await review.save();

    res.status(200).json({ review });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
