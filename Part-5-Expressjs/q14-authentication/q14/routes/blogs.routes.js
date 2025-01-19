const express = require("express");
const BlogModel = require("../models/blogs.model");

const blogsRouter = express.Router();

blogsRouter.get("/", async (req, res) => {//to get all the data
  try {
    let blogs = await BlogModel.find().populate("user");
    res.json({ blogs });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching blogs." });
  }
});


blogsRouter.get("/:id", async (req, res) => { // get data by id 
  let blogId = req.params.id;
  let blog = await BlogModel.find({ _id: blogId }).populate("user");
  res.json({ blog });
});

blogsRouter.post("/add", async (req, res) => {
  try {
    let blog = await BlogModel.create(req.body);
    res.status(201).json({ msg: "Blog Created", data: blog });
  } catch (err) {
    res.send("Something went wrong in creating blogs");
  }
});

blogsRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await BlogModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({ message: "Blog updaated successfully!!" });
  } catch {
    console.log(error);
  }    
});

blogsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await BlogModel.findByIdAndDelete({ _id: id });
    res.send({ message: "Blog Deleted successfully!!" });
  } catch {
    console.log(error);
  }
});

module.exports = blogsRouter;
