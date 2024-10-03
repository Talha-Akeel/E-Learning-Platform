const user_model = require("../../models/user_model");

const update_user = async (req, res) => {

    const { id } = req.userId;
    const updated_data = req.fields;
  
    try {
      const data = await user_model.findByIdAndUpdate(id, updated_data, { new: true });
  
      if (data) {
        res.status(200).send({
          success: true,
          message: "User updated successfully!",
          data,
        });
      } else {
        res.status(404).send({
          success: true,
          message: "This data does not exist so we cannot be update.",
        });
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Something went wrong at server!",
        error,
      });
    }
  };

module.exports = update_user;