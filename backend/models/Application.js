
import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  companyName: String,
  resumeLink: String,
  userId: String
});

const ApplicationModel = mongoose.model("Application", applicationSchema);

export default ApplicationModel;