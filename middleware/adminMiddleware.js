const userModel = require("../model/user")

module.exports= async(req, res, next)=>{
    try {
        const user= await userModel.findById({_id:req.body.userId})
        // console.log(user)
        if(user?.role!=="admin"){
            return res.status(401).send({
                success:false,
                message:"Auth Failed"
            })
        }
        return next()
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error in Auth Admin API",
            error
        })
    }
}