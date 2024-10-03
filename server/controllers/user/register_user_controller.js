const user_model = require("../../models/user_model");
const { hash_password } = require("../../utils/bcrypt_utils");
const fs = require("fs");

const register_user = async (req, res) => {
  try {
    const { name, email, password, role } = req.fields;
    const { profile_pic } = req.files;

    const new_user = new user_model({
      name,
      email,
      password: await hash_password(password),
      role,
    });

    if(profile_pic){
    new_user.profile_pic.data = fs.readFileSync(profile_pic.path);
    new_user.profile_pic.contentType = profile_pic.type;
    }

    await new_user.save();
    console.log(new_user);

    res.status(201).send({
      success: true,
      message: "User registered succesfully!",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong at server while registering the user.",
      error,
    });
  }
};

module.exports = register_user;

