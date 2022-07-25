const mongoose = require("mongoose");
const moment = require("moment");

const NotesSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	content: {
		type: String,
		require: true
	},
	 date: { 
	 	type: String,
	 	default: moment(Date.now()).format('LLL')
	 }
})

module.exports = mongoose.model("Notes", NotesSchema)