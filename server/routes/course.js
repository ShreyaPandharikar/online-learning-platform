// server/routes/course.js
const express = require("express");
const Course = require("../models/Course");
const router = express.Router();

router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

router.post("/", async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.status(201).json(course);
});

module.exports = router;
