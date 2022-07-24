
const express = require("express")
const router = express.Router();

// import service class
const service = require('../database/services/notesClass')

router.post('/insertnotes', async function(req, res){

	// const Notes = new service(title, description, content)
	// const insertNotes = await Notes.insert();
	console.log(req.body.content)

	res.json("inser Succesfull")
})

module.exports = router