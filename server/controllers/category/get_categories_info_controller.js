const category_model = require("../../models/category_model");

const get_category_info = async (req, res) => {
  try {

    const category = await category_model.find().select("-category_image");

    console.log(category);
    
    if (category) {
      res.status(200).send({
        success: true,
        message: "Category info fetched succesfully!",
        data: category,
      });
    } else {
      res.status(404).send({
        success: true,
        message: "No such category found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong at server while fetching category info.",
      error,
    });
  }
};

module.exports = get_category_info;