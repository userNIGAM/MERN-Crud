import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./Models/user.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/crud-main")
  .then((result) => {
    console.log("mongodb connected Sccesfull");
  })
  .catch((error) => {
    console.log("mongodb connection failed");
  });

app.post("/adduser", async (req, res) => {
  const { name, email, address, contact } = req.body;
  try {
    if (!name || !email || !address || !contact) {
      res.status(400).json({ message: "All feilds are Required" });
    }
    const user = new User({
      name,
      email,
      address,
      contact,
    });
    await user.save();
  } catch (error) {
    console.log("Error Regestring Data due to ", error);
  }
});

app.get("/getuser", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "User Not Found!!", error });
  }
});

app.get("/updateuser/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      return res.json(user);
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
});

app.put("/updateduser/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, address, contact } = req.body;
  if (!name || !email || !address || !contact) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    User.findByIdAndUpdate({ _id: id }, { name, email, address, contact }).then(
      (user) => res.json(user)
    );
  } catch (error) {
    res.status(500).json({ message: "Error Updating User" });
  }
});

app.delete("/deleteuser/:id", async (req, res) => {
  const { id } = req.params;
  try {
    User.findByIdAndDelete({ _id: id }).then((user) => res.json(user));
  } catch (error) {
    res.status(500).json({ message: "Error Deleting User" });
  }
});

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
  console.log("localhost://", PORT);
});
