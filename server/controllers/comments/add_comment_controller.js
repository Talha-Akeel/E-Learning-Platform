const comment_model = require("../../models/comment_model");

const add_comment = async (req, res) => {
  try {
    const { content, date, user, lecture } = req.fields;

    const new_comment = new comment_model({ content, date, user, lecture });

    await new_comment.save();

    res.status(201).send({
        success: true,
        message: 'A new comment added succesfully!',
        data: req.fields
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong at server while adding a comment",
      error,
    });
  }
};

module.exports = add_comment;