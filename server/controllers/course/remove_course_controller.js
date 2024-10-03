const course_model = require("../../models/course_model");

const remove_course = async (req, res) => {

    const { id } = req.userId;
    
    try{
        const course = await course_model.findByIdAndDelete(id);
        
        if(course){
            res.status(200).send({
                success:true,
                message: `User with ID:${id} is updated successfully`,
                course
            });
        }else{
            res.status(404).send({
                success:false,
                message: "No data found"
            });
        }
    }catch(error){
        res.status(500).send({
            success:false,
            message: "Something went wrong at server"
        });
    }
}

module.exports = remove_course;