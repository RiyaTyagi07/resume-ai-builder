import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    summary: String,
    skills: String,
    education: String,
    experience: String,
  },
  {
    timestamps: true,
  }
);

const Resume = mongoose.model(
  "Resume",
  resumeSchema
);

export default Resume;