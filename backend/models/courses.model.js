import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseID: {
    type: String,
    unique: true,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  reviews: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  difficulty: {
    type: Number,
    default: 0,
  },
  workload: {
    type: Number,
    default: 0,
  },
  significance: {
    type: Number,
    default: 0,
  },
  numRating: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("course", courseSchema);
