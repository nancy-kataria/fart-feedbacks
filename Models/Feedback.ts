import mongoose, { models } from "mongoose";

const { Schema } = mongoose;

const feedbackSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Feedback = models.Feedback || mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;

export default Feedback;
