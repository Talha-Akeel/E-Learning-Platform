const course_model = require("../../models/course_model");

const get_course_details = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await course_model.findById(id).select("-course_image");
    // console.log(course);
    
    if (course) {
      res.status(200).send({
        success: true,
        message: "Course Details fetched succesfully!",
        data: course,
      });
    } else {
      res.status(404).send({
        success: true,
        message: "No such course found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong at server while fetching course details.",
      error,
    });
  }
};

module.exports = get_course_details;