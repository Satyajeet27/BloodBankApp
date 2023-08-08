const { Router } = require("express");
const authmiddleware = require("../middleware/authmiddleware");
const { bloodDetailsController } = require("../controller/analytics");
const router = Router();

//routes
router.get("/bloodGroups-data", authmiddleware, bloodDetailsController);

module.exports = router;
