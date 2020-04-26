const bodyParser = require("body-parser");
const express = require("express");

// Configure Express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Configure routes
app.use("/", require(__dirname + "/routes/index"));

// Run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}.`));