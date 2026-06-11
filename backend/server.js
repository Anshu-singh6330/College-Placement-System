
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Application from "./models/Application.js";
import authRoutes from"./routes/authRoutes.js"
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDb connected"))
.catch((err) => console.log(err));

// ✅ Auth Routes
app.use("/api/auth", authRoutes);

// ✅ APPLY API
app.post("/api/apply", async (req, res) => {
  try {
    const { companyName, resumeLink, userId } = req.body;

    const newApp = new Application({
      companyName,
      resumeLink,
      userId
    });

    await newApp.save();

    res.status(201).json({ message: "Application Saved" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ GET USER APPLICATIONS
app.get("/api/applications/:userId", 
  async (req, res) => {
  try {
    const data = await Application.find({
      userId: req.params.userId
    });

    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(process.env.PORT || 6000, () => console.log("Server running on port 5000"));