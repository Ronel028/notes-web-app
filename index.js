
const express = require("express");
const path = require("path");
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
app.set('views', __dirname + '/views')
app.set("view engine", "ejs")

// mongoConnection
const dbConnection = require("./database/mongoConnection");
dbConnection;

// routes
app.use('/', require("./Routes/pageRoutes"))
app.use('/service', require("./Routes/servicesRoutes"))



app.listen(PORT, function(){
	console.log("Server started in port: ", PORT)
})