import mongoose from "mongoose";

const {Schema} = mongoose;

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
  
  const Feedback = mongoose.model('User', feedbackSchema);
  
  module.exports = Feedback;