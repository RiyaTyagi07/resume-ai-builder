import express from "express";
import Resume from "../models/Resume.js";

const router = express.Router();

/* Save Resume */

router.post("/save", async (req, res) => {
  try {
    const resume = await Resume.create(req.body);

    res.status(201).json({
      message: "Resume Saved Successfully",
      resume,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* Get All Resumes */

router.get("/", async (req, res) => {
  try {
    const resumes = await Resume.find().sort({
      createdAt: -1,
    });

    res.json(resumes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* Get Single Resume */

router.get("/:id", async (req, res) => {
  try {
    const resume =
      await Resume.findById(req.params.id);

    res.json(resume);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* Update Resume */

router.put("/:id", async (req, res) => {
  try {
    const updatedResume =
      await Resume.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json({
      message: "Resume Updated",
      updatedResume,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* Delete Resume */

router.delete("/:id", async (req, res) => {
  try {
    await Resume.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Resume Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;