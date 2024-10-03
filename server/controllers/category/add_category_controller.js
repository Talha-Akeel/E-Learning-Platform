const category_model = require("../../models/category_model");
const fs = require('fs');

const add_category = async (req, res) => {
  try {
    const { title } = req.fields;
    const { category_image } = req.files;

    const new_category = new category_model({ title });

    new_category.category_image.data = fs.readFileSync(category_image.path);
    new_category.category_image.contentType = category_image.contentType;

    await new_category.save();
    
    res.status(201).send({
        success: true,
        message: 'A new category added succesfully!',
        data: req.fields
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong at server while adding a category",
      error,
    });
  }
};

module.exports = add_category;