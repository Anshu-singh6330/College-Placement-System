
import express from "express";
const router = express.Router();
const {
  applyJob,
  getMyApplications,
  getAllApplications,
} = require("../controllers/applicationController");

const { protect } = require("../middleware/authMiddleware");

// Student apply job
router.post("/apply/:jobId", protect, applyJob);

// Student apne applications dekhe
router.get("/my", protect, getMyApplications);

// Admin sab applications dekhe
router.get("/", protect, getAllApplications);

export default  router;