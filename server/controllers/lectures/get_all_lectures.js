const lecture_model = require("../../models/lecture_model");

const get_all_lectures = async (req, res) => {
  try {
    const results = await lecture_model.find().select('-lecture_video');
    if (results.length) {
      res.status(200).send({
        success: true,
        message: "lecture(s) are fetched succesfully!",
        count: results?.length,
        data: results,
      });
    } else {
      res.status(404).send({
        success: true,
        message: "No record found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong at server while fetching lecture(s).",
      error,
    });
  }
};

module.exports = get_all_lectures;
