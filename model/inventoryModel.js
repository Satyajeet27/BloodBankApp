const { Schema, model } = require("mongoose");
const inventorySchema = new Schema(
  {
    inventoryType: {
      type: String,
      required: [true, "inventory type field is required"],
      enum: ["in", "out"],
    },
    email: {
      type: String,
      required: [true, "donar email is required"],
    },
    bloodGroup: {
      type: String,
      required: [true, "blood group field is required"],
      enum: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
    },
    quantity: {
      type: Number,
      required: [true, "quantity field is required"],
    },
    organisation: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "organisation field is required"],
    },
    hospital: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donar: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { timestamps: true }
);
module.exports = model("Inventory", inventorySchema);
