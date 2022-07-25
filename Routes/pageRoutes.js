const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();


router.get('/', function(req, res){
	res.render('index')
})

router.get('/addnewnotes', function(req, res){
	res.render('newNotes');
})

router.get('/updatenotes/:title/:desc/:content', function(req, res){
	const { title, desc, content } = req.params
	res.render('updateNotes', {
		title: title,
		description: desc,
		content: content
	});	
	
})

module.exports = router;