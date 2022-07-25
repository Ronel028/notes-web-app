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
	res.render('updateNotes');
})

module.exports = router;