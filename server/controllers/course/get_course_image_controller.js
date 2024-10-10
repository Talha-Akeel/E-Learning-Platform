const course_model = require("../../models/course_model");

const get_course_image = async (req, res) => {
    try {
        const { id } = req.params;

        const course = await course_model.findById(id).select("course_image");
        // console.log(course.course_image.data);
        // console.log(course.course_image.contentType);
        // console.log(course);
        if (course) {
            res.status(200).contentType(course.course_image.contentType).send(course.course_image.data);
        } else {
            res.status(404).send({
                success: true,
                message: "No such course found!",
            });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong at server while fetching course image.",
            error,
        });
    }
};

module.exports = get_course_image;