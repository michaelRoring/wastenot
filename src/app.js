require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");

const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("../routes/userRouter");
const foodRouter = require("../routes/foodRouter");

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;
const mongoString = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", error => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
app.use(express.json());
app.use("/user", userRouter);
app.use("/food", foodRouter);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
