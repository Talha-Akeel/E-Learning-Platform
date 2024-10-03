const user_model = require("../../models/user_model");

const remove_user = async (req, res) => {

    const { id } = req.userId;
    
    try{
        const data = await user_model.findByIdAndDelete(id);
        if(data){
            res.status(200).send({
                success:true,
                message: `User with ID:${id} is deleted successfully`,
                data
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

module.exports = remove_user;