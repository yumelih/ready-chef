import mongoose from "mongoose";

const isConnected: boolean = false;

export const connectToDB = async () => {
  if (!process.env.MONGODB_URI) {
    return console.log("Missing DB credentials!");
  }

  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Something went wrong while connecting DB", err);
  }
};
