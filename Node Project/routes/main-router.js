const express = require("express");
const app = express();
const Blog = require("../model/blog");

app.use(express.json());

app.get("/all-blogs", async (req, res) => {
  try {
    const { page, limit } = req.query;
    const blogs = await Blog.find()
      .skip((page - 1) * limit)
      .limit(limit);
    if (!blogs) {
      return res.status(404).send("No blogs found");
    }
    res.send(blogs);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/search/:key", async (req, res) => {
  const data = await Blog.find({
    $or: [
      { title: { $regex: req.params.key, $options: "i" } },
      { blogContent: { $regex: req.params.key, $options: "i" } },
    ],
  });
  res.send(data);
});

//$or --> keyword given by MongoDB to check either of the conditions are satisified in its given set of array, $options: i --> mentions it is case-insensitive
module.exports = app;
