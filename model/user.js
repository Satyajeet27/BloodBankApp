const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    role: {
      type: String,
      required: [true, "role path required"],
      enum: ["admin", "organisation", "donar", "hospital"],
    },
    name: {
      type: String,
      required: function () {
        if (this.role === "admin" || this.role === "user") {
          return true;
        }
        return false;
      },
    },
    organisationName: {
      type: String,
      required: function () {
        if (this.role === "organisation") {
          return true;
        }
        return false;
      },
    },
    hospitalName: {
      type: String,
      required: function () {
        if (this.role === "hospital") {
          return true;
        }
        return false;
      },
    },
    email: {
      type: String,
      required: [true, "email field is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password field is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "website field is required"],
    },
    phone: {
      type: String,
      required: [true, "phone field is required"],
    },
  },
  { timestamps: true }
);

const userModel = model("user", userSchema);

module.exports = userModel;
