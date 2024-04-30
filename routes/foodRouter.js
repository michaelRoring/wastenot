require("dotenv").config();
const User = require("../models/userModel");
const FoodItem = require("../models/foodModel");
const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/add", (req, res) => {
  const { name, quantity, unit, expirationDate, purchaseDate, addedBy } =
    req.body;

  const data = new FoodItem({
    name,
    quantity,
    unit,
    expirationDate,
    purchaseDate,
    addedBy,
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
router.get("/getOne/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const data = await FoodItem.find({ addedBy: id }).lean();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
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
