const user_model = require("../../models/user_model");
const { compare_password } = require("../../utils/bcrypt_utils");
const { generate_token } = require("../../utils/jwt_utils");

const login_user = async (req, res) => {
  try {
    const { email, password } = req.fields;

    const user = await user_model.findOne({ email });
    if (user) {
      const is_password_correct = await compare_password(password, user.password);
      if (is_password_correct) {
        const token = generate_token({ id: user._id });

        res.cookie('token', token, {
          httpOnly: true,
          secure: true,
          sameSite: 'Strict',
          maxAge: 1000 * 60 * 60 * 12
        });

        res.status(200).send({
          success: true,
          message: "User logged in succesfully!",
        });
      } else {
        res.status(400).send({
          success: false,
          message: "Invalid credentials!",
        });
      }
    } else {
      res.status(404).send({
        success: true,
        message: "User does not exist. Please signup first!",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong at server while logging in the user.",
      error,
    });
  }
};

module.exports = login_user;