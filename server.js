//impoting libraries
const express = require("express");
const testRoute = require("./routes/test");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoute = require("./routes/auth");
const inventoryRoute = require("./routes/inventory");
const analyticsRoute = require("./routes/analytics");
const adminRoute = require("./routes/admin");

//config dotenv
dotenv.config();

//connect db
connectDB();

//route-object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
// app.use("/api/v1/test", testRoute);
app.use("/api/v1/auth/", authRoute);
app.use("/api/v1/inventory/", inventoryRoute);
app.use("/api/v1/analytics/", analyticsRoute);
app.use("/api/v1/admin/", adminRoute);

//defining port
const PORT = process.env.PORT || 8080;

//listening server
app.listen(PORT, () => console.log("Server is running on PORT: ", PORT));
