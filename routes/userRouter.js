require("dotenv").config();
const User = require("../models/userModel");
const FoodItem = require("../models/foodModel");
const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

//Post Method
router.post("/register", (req, res) => {
  const { username, email, password, notificationTime } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const data = new User({
    username,
    email,
    password: hashedPassword,
    notificationTime,
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", (req, res) => {
  res.send("Get All API");
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  //   res.send("Get by ID API");
  res.send(req.params.id);
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

module.exports = router;
