const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb://localhost:27017/test_db";

const connect = mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = connect;