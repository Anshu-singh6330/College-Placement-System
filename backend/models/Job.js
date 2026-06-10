import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true},

    company: { type: String, required: true},

    description: { type: String},
    eligibility: { type:String},
    lastDate: { type: Date, required:true},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, { timestamps: true});

export default  mongoose.model("job", jobSchema);
