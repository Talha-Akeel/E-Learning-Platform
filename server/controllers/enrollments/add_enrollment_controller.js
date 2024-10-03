const enrollment_model = require("../../models/enrollment_model");

const add_enrollment = async (req, res) => {
  try {
    const { user, course, payment_status, date } = req.fields;

    const new_enrollment = new enrollment_model({ user, course, payment_status, date });

    await new_enrollment.save();

    res.status(201).send({
        success: true,
        message: 'User has enrolled successfully.',
        data: req.fields
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong at server while enrollment.",
      error,
    });
  }
};

module.exports = add_enrollment;