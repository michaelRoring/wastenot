const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
    enum: ["potong", "gram", "kilogram", "buah", "liter", "botol", "kaleng"],
  },
  expirationDate: {
    type: Date,
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const FoodItem = mongoose.model("FoodItem", foodItemSchema);

module.exports = FoodItem;
