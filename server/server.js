var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var bookings = require("./routes/bookings");
var driverLocation = require("./routes/driverLocation");
var drivers = require("./routes/drivers");

var app = express();

var port = 3000;

var socket_io = require("socket.io");

var io = socket_io();


//views

app.set("views",  path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//Body parser MW

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//Routes

app.use("/", index);
app.use("/api", bookings);
app.use("/api", driverLocation);
app.use("/api", drivers);

io.listen(app.listen(port, function(){
	console.log("Server running on port", port);
}));

app.io = io.on("connection", function(socket){
	console.log("Socket connected: " + socket.id);
});