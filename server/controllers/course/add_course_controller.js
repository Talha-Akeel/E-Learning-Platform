const course_model = require("../../models/course_model");
const fs = require('fs');

const add_course = async (req, res) => {
  try {
    const { title, description, instructor, price, category } = req.fields;
    const { course_image } = req.files;

    const new_course = new course_model({ title, description, instructor, price, category });
    console.log(new_course);

    if(course_image){
    new_course.course_image.data = fs.readFileSync(course_image.path);
    new_course.course_image.contentType = course_image.type;
    }

    
    await new_course.save();
    
    

    res.status(201).send({
        success: true,
        message: 'A new course added succesfully!',
        data: req.fields
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong at server while adding a course",
      error,
    });
  }
};

module.exports = add_course;