const comment_reply_model = require("../../models/comment_reply_model");

const add_comment_reply = async (req, res) => {
  try {
    const { content, date, user, comment } = req.fields;

    const new_comment_reply = new comment_reply_model({ content, date, user, comment });

    await new_comment_reply.save();

    res.status(201).send({
        success: true,
        message: 'A new comment reply added succesfully!',
        data: req.fields
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong at server while adding a comment reply",
      error,
    });
  }
};

module.exports = add_comment_reply;