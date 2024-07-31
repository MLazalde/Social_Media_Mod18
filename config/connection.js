const { connection, connect } = require("mongoose");

connect("mongodb://localhost:27017/");

module.exports = connection;
