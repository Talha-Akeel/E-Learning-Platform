const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const secret_key = process.env.JWT_SECRET_KEY;

const generate_token = (text) => {
  try {
    return jwt.sign(text, secret_key, { expiresIn: "5d" });
  } catch (error) {
    console.log("Something went wrong while generating token. ERR:", error);
  }
};

const decode_token = (token) => {
  try {
    return jwt.verify(token, secret_key);
  } catch (error) {
    console.log("Something went wrong while decoding token. ERR:", error);
  }
};

module.exports = { generate_token, decode_token };
