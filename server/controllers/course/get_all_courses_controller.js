const course_model = require("../../models/course_model");

const get_all_courses = async (req, res) => {
  try {
    const results = await course_model.find().select('-course_image');
    if (results.length) {
      res.status(200).send({
        success: true,
        message: "Course(s) are fetched succesfully!",
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
      message: "Something went wrong at server while fetching course(s).",
      error,
    });
  }
};

module.exports = get_all_courses;
