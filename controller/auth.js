const bcrypt = require("bcryptjs");
const userModel = require("../model/user");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    //validation
    if (existingUser) {
      return res.status(200).send({
        status: false,
        message: "user is already registered",
      });
    }
    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    //saving to db
    const user = await userModel.create(req.body);
    return res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "Invalid Credentials",
      });
    }
    //role validation
    if (existingUser.role !== req.body.role) {
      return res.status(404).send({
        success: false,
        message: "role doesn't mactch",
      });
    }

    //compare password
    const comparePassword = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
    if (!comparePassword) {
      return res.status(404).send({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign(
      {
        userId: existingUser._id,
        userRole: existingUser.role,
        userName: existingUser.name,
        userEmail: existingUser.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    return res.status(200).send({
      success: true,
      message: "Login Successful",
      token,
      user: existingUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login API",
      error,
    });
  }
};

const currentUserController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    // console.log(req.body);
    // console.log(user);
    return res.status(200).send({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting current user",
      error,
    });
  }
};

module.exports = {
  registerController,
  loginController,
  currentUserController,
};
