const { decode } = require("jsonwebtoken");
const { decode_token } = require("../utils/jwt_utils");

const auth_middleware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(req.cookies.token);
    console.log(decode(token));
    
    
    const decoded_info = decode_token(token);
    if (decoded_info) {
      
      req.userId = decoded_info;
      next();
    } else {
      res.status(403).send({
        success: true,
        message: "Invalid access!",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: true,
      message: "Something went wrong while verifying authentication.",
    });
  }
};

module.exports = { auth_middleware };