
const express = require("express")
const router = express.Router();

// import service class
const service = require('../database/services/notesClass')
const Notes = new service()

router.post('/insertnotes', async function(req, res){

	try {
		const { title, description, content } = req.body;

		if(!title || !description || !content){
			console.log("Cannot be empty")
			return

		}else{

			await Notes.insert(title, description, content);
			res.status(200).json({
				message: "OK"
			})

		}

	} catch (error) {
		res.json({
			message: "Failed"
		})
	}
	
})

// get data from database
router.get("/getdata", async function(req, res){
	try {
		const viewNotes = await Notes.view();
		res.json(viewNotes)
	} catch (error) {
		res.json({
			message: "Failed"
		})
	}
})

// delete notes data from database
router.delete("/deletenotes", async function(req, res){
	try {
		const { id } = req.query;
		const deleteNotes = await Notes.deleteNotes(id);
		console.log(deleteNotes)
		res.status(200).json({
			message: "OK"
		})
	} catch (error) {
		res.json({
			message: "Failed"
		})
	}
	

})

module.exports = router