
import Application from "../models/Application.js";

exports.applyJon = async(req, res) => {
    const { jobId } = req.body;

    try {
        const existing = await
        Application.findOne({ student: req.user.id, job: jobId});
        if(existing) return 
        res.status(400).json({message: "Already applied"});

        const application = await
        Application.create({student:
            req.user.id, job: jobId });
            res.status(201).json(application);
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
};

exports.getApplications = async(req, res) => {
    try {
        const applications = await
        Application.find().populate("student","name email").populate("job", "title company");
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({message: "Server error"})
    }
};