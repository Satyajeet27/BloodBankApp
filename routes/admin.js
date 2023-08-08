const {Router}= require("express")
const authmiddleware = require("../middleware/authmiddleware")
const { getDonarListController, getHospitalListController, getOrganisationListController, deleteController } = require("../controller/admin")
const adminMiddleware = require("../middleware/adminMiddleware")

const router= Router()

router.get("/get-donars",authmiddleware,adminMiddleware, getDonarListController)
router.get("/get-hospital",authmiddleware,adminMiddleware, getHospitalListController)
router.get("/get-organisation",authmiddleware,adminMiddleware, getOrganisationListController)
router.delete("/delete-donar/:id",authmiddleware,adminMiddleware, deleteController)
router.delete("/delete-hospital/:id",authmiddleware,adminMiddleware, deleteController)
router.delete("/delete-organisation/:id",authmiddleware,adminMiddleware, deleteController)


module.exports= router