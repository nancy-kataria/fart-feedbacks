import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
        throw new Error('Please define the MONGODB_URI environment variable in .env.local');
      }
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Connected to Mongo")
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
