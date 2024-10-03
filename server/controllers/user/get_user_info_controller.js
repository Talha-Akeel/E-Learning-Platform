const user_model = require("../../models/user_model");

const get_user_info = async (req, res) => {
  try {
    const { id } = req.userId;

    const user = await user_model.findById(id).select("-password, -profile_pic");
    console.log(user);
    
    if (user) {
      res.status(200).send({
        success: true,
        message: "User info fetched succesfully!",
        data: user,
      });
    } else {
      res.status(404).send({
        success: true,
        message: "No such user found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong at server while fetching user info.",
      error,
    });
  }
};

module.exports = get_user_info;