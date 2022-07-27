
const express = require("express")
const router = express.Router();

// import service class
const service = require('../database/services/notesClass')
const Notes = new service()

// insert new notes ---------------------------------------------
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
//--------------------------------------------------------


// get data from database ------------------------------
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
// ----------------------------------------------------------

// delete notes data from database ------------------------
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
//--------------------------------------------------------------


// update notes data from database -------------------------
router.post("/updatemynotes", async function(req, res){
	try {
		const { id } = req.query;
		const { title, desc, content } = req.body;
		const updateNotes = await Notes.updateNotes(id, title, desc, content)
		console.log(updateNotes)
		res.json({
			message: "OK"
		})
	} catch (error) {
		console.log(error)
		res.json({
			message: "Failed"
		})
	}
})
//----------------------------------------------------------------

// get and update notes by id ---------------------
router.get('/view/:id', async function(req, res){
	const findOne = await Notes.findById(req.params.id)
	console.log(findOne)
	res.render('viewAll', { notes: findOne[0] })
})
router.get('/update', async function(req, res){
	const updateNotes = await Notes.findById(req.query.id)
	res.render('updateNotes', { notesUpdate: updateNotes[0] })
})
// -----------------------------------------

module.exports = router