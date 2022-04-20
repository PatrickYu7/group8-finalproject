import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("review", reviewSchema);
