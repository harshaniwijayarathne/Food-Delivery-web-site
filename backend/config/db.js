import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://harshaniwijaya_db_user:2002123456@cluster0.qlao23h.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}