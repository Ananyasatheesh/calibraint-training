const express = require("express");
const app = express();
const User = require("../model/user");
app.post("/user", async (req, res) => {
  try {
    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
    const savedUser = await user.save();
    console.log("Created a user", savedUser);
    res.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Cannot create user");
  }
});

app.get("/user-list", async (req, res) => {
  try {
    const userFound = await User.find();
    console.log(userFound);
    res.status(200).json(userFound);
  } catch (err) {
    console.log("Error found");
    res.status(500).json({ message: "Error fetching user", error: err });
  }
});

app.put("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updatedData);
    if (!updatedUser) {
      return res.status(404).send("No user found");
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(deletedUser);
    res.send("User deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;