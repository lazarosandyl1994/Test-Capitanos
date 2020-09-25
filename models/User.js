const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    _id: {
      type: "Oid"
    },
    friends: {
      type: ["Oid"]
    },
    hunterSelected: {
      type: "Oid"
    }
  },
  {
    timestamps: false
  }
);

let User = mongoose.model("User", userSchema);

module.exports = User;