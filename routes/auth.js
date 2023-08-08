const { Router } = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controller/auth");
const authmiddleware = require("../middleware/authmiddleware");

const router = Router();

//ROUTES
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//GET-CURRENT-USER || GET
router.get("/current-user", authmiddleware, currentUserController);

module.exports = router;
