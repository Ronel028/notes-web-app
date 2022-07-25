const mongoose = require("mongoose")

// mongoDB connection

const dbConnection = mongoose.connect(process.env.mongoURI, {
	useNewUrlParser: true,
		useUnifiedTopology: true,
		},function(error){
			if(error){
				console.log("MongoDB error connection")
			}
			else{
				console.log("MongoDB Connected")
			}
	}
)


module.exports = dbConnection