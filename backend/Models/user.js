import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  contact: String,
});

const User = mongoose.model("data", userSchema);

export default User;
