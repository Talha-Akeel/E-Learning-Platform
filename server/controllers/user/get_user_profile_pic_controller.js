const user_model = require("../../models/user_model");

const get_user_profile_pic = async (req, res) => {
    try {
        const { id } = req.userId;

        const user = await user_model.findById(id).select("profile_pic");
        console.log(user.profile_pic.contentType);
        
        if (user) {
            // res.set('content-type',user.profile_pic.contentType);
            res.status(200).contentType(user.profile_pic.contentType).send(user.profile_pic.data);
        } else {
            res.status(404).send({
                success: true,
                message: "No such user found!",
            });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Something went wrong at server while fetching user profile pic.",
            error,
        });
    }
};

module.exports = get_user_profile_pic;