import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL || "")
    .then(() => {
      console.log("MongoDB is Connected...");
    })
    .catch((err) => {
      console.error("DB connection failed:", err);
    });
};

export default connectDB;
