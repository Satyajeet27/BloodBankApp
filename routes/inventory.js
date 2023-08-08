const { Router } = require("express");
const authmiddleware = require("../middleware/authmiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalsController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
} = require("../controller/inventory");

const router = Router();

//routes
//ADD-INVENTORY || POST
router.post("/create-inventory", authmiddleware, createInventoryController);

//ACCESS-INENTORY || GET
router.get("/get-inventory", authmiddleware, getInventoryController);

//ACCESS-HOSPITAL BLOOD RECORDS|| GET
router.post(
  "/get-inventory-hospital",
  authmiddleware,
  getInventoryHospitalController
);

//ACCESS_DONARS || GET
router.get("/get-donars", authmiddleware, getDonarsController);

//ACCESS_HOSPITALS || GET
router.get("/get-hospitals", authmiddleware, getHospitalsController);

//ACCESS_ORGANISATION || GET
router.get("/get-organisations", authmiddleware, getOrganisationController);

//ACCESS_ORGANISATION_FOR_HOSPITAL || GET
router.get(
  "/get-organisations-for-hospital",
  authmiddleware,
  getOrganisationForHospitalController
);

module.exports = router;
