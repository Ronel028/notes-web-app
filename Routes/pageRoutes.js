const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get('/', function(req, res){
	res.render('index')
})

router.get('/addnewnotes', function(req, res){
	res.render('newNotes');
})

router.get('/updatenotes', function(req, res){
	const { id } = req.query
	res.redirect(`/service/update?id=${id}`);	
	
})	

router.get('/view-notes/:id', function(req, res){
	const { id } = req.params
	res.redirect(`/service/view/${id}`)
})

module.exports = router;