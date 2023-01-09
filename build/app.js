"use strict";
var express = require("express");
var app = express();
var port = 3001;
app.use(express.static(__dirname + '/public'));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});
app.listen(port, function () {
    console.log("server is work!!! port ".concat(port));
});
