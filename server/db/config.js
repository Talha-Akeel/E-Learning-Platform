const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();
const URL = process.env.DATABASE_URL;

const connect_database = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log(`Something went wrong while connecting database. ERR:${error}`);
  }
};

module.exports = connect_database;