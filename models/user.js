const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    googleId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    displayName: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
    goal: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
