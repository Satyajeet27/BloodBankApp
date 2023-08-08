// //importing libraries
// const { Router } = require("express");
// const testController = require("../controller/test");

// //route-object
// const router = Router();

// //routes
// //test
// router.get("/", testController);

// module.exports = router;

function x(...args) {
  console.log(args);
}
x({ a: 1 }, { a: 2 });
