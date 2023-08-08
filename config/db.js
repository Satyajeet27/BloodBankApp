const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongodb database error ${error}`);
  }
};

module.exports = connectDB;
