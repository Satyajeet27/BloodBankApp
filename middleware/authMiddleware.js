const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decode) => {
      if (error) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed",
        });
      } else {
        // console.log("decode", decode);
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Auth Failed",
      error,
    });
  }
};
