import Job from "../models/Job.js";

// Create Job (Admin)
export const createJob = async (req, res) => {
  const { title, company, description, eligibility, lastDate } = req.body;

  try {
    const job = await Job.create({
      title,
      company,
      description,
      eligibility,
      lastDate,
      createdBy: req.user.id,
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get All Jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};