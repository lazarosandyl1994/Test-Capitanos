const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hunterSchema = new Schema(
  {
    _id: {
      type: "Oid"
    },
    user: {
      type: "Oid"
    },
    locked: {
      type: "Boolean"
    },
    level: {
      type: "Number"
    },
    __v: {
      type: "Number"
    }
  },
  {
    timestamps: false
  }
);

let Hunter = mongoose.model("Hunter", hunterSchema);

module.exports = Hunter;