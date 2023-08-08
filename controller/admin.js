const userModel = require("../model/user")

const getDonarListController= async(req, res)=>{
    try {
        const donar= await userModel.find({role:"donar"}).sort({createdAt:-1})
        return res.status(200).send({
            success:true,
            message:"Donar List data fetched successfully",
            donar,
            totalCount:donar.length
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error in Donor List API",
            error
        })
    }
}

const getHospitalListController= async(req, res)=>{
    try {
        const hospital= await userModel.find({role:"hospital"}).sort({createdAt:-1})
        return res.status(200).send({
            success:true,
            message:"Hospital List data fetched successfully",
            hospital,
            totalCount:hospital?.length
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error in Hospital List API",
            error
        })
    }
}

const getOrganisationListController= async(req, res)=>{
    try {
        const organisation= await userModel.find({role:"organisation"}).sort({createdAt:-1})
        console.log(organisation)
        return res.status(200).send({
            success:true,
            message:"Organisation List data fetched successfully",
            organisation,
            totalCount:organisation?.length
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error in organisation List API",
            error
        })
    }
}

const deleteController= async(req, res)=>{
    try {
        console.log("delete",req.params.id)
        await userModel.findByIdAndDelete(req.params.id)
        
        return res.status(200).send({
            success:true,
            message:"Record Deleted Successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error in Delete API",
            error
        })
    }
}


module.exports={
    getDonarListController, getHospitalListController, getOrganisationListController, deleteController
}