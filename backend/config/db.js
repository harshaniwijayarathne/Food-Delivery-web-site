import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://greatstack:1234555@cluster0.oqvjx9h.mongodb.net/food-del').then(() => console.log("DB Connected"));
}