
const express = require("express");
const path = require("path");
const mongoose = require("mongoose")
const app = express();
const PORT = process.env.PORT || 8080;
require("dotenv").config();

// server ststic files
app.use('/style', express.static(path.join(__dirname, './public/style')))
app.use('/js', express.static(path.join(__dirname, './public/js')))
app.use('/images', express.static(path.join(__dirname, './public/images')))

// middleware to parse data from the body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// set view engine
app.set("view engine", "ejs")


// routes
app.use('/', require("./Routes/pageRoutes"))
app.use('/service', require("./Routes/servicesRoutes"))

// mongoConnection
const dbConnection = require("./database/mongoConnection");
dbConnection;

// 
// app.use((err, req, res, next) => {
// 	if (!err) return next();
// 	return res.status(400).json({
// 	  status: 400,
// 	  error: 'OOps! Bad request',
// 	});
// });


app.listen(PORT, function(){
	console.log("Server started in port: ", PORT)
})