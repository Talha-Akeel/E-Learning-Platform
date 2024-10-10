const lecture_model = require("../../models/lecture_model");
const fs = require('fs');

const add_lecture = async (req, res) => {
  try {
    const { title, description, duration, course } = req.fields;
    const { lecture_video } = req.files;

    const new_lecture = new lecture_model({ title, description, duration, course });

    // console.log(title);
    // console.log(description);
    // console.log(duration);
    // console.log(course);
    // console.log(lecture_video);
    // console.log(new_lecture);

    fs.readFile(lecture_video.path, async (err, data) => {

      if (err) {
        return res.status(500).send({
          success: false,
          message: 'Error reading video file',
        });
      }
      try {
        if (lecture_video) {
          new_lecture.lecture_video.data = data;
          new_lecture.lecture_video.contentType = lecture_video.type;
        }

        await new_lecture.save();

        res.status(201).send({
          success: true,
          message: 'A new lecture added succesfully!',
          data: req.fields
        });
      } catch (error) {
        res.status(500).send({
          success: false,
          message: "Something went wrong at server while adding a lecture",
          error,
        });
      }


    }
    )
    // console.log(new_lecture);

    // if(lecture_video){
    // new_lecture.lecture_video.data = fs.readFileSync(lecture_video.path);

    // new_lecture.lecture_video.contentType = lecture_video.type;

    // }

    // console.log(lecture_video.path);





  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong at server while adding a lecture",
      error,
    });
  }
};

module.exports = add_lecture;