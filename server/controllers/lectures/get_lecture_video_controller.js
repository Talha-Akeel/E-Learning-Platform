const lecture_model = require("../../models/lecture_model");

const get_lecture_video = async (req, res) => {
    try {
        const { id } = req.params;

        const lecture = await lecture_model.findById(id).select("lecture_video");
        // console.log(lecture.lecture_image.data);
        // console.log(lecture.lecture_image.contentType);
        // console.log(lecture);
        if (lecture) {
            res.status(200).contentType(lecture.lecture_video.contentType).send(lecture.lecture_video.data);
        } else {
            res.status(404).send({
                success: true,
                message: "No such lecture found!",
            });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong at server while fetching lecture video.",
            error,
        });
    }
};

module.exports = get_lecture_video;