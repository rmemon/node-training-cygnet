var express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  mongoose = require("mongoose"),
  cors = require("cors");

var isProduction = process.env.NODE_ENV === "production";
var dbURI = "mongodb://localhost/demo";

if (isProduction) {
  dbURI = "process.env.MONGODB_URI";
}

mongoose.connect(dbURI, { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./models/ToDo");

var routes = require("./routes/routes.js");
routes(app);

var server = app.listen(3000, function() {
  console.log("app running on port.", server.address().port);
});
