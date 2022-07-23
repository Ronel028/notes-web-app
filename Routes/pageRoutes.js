const express = require("express");
const router = express.Router();


router.get('/', function(req, res){
	res.render('index')
})

router.get('/addnewnotes', function(req, res){
	res.render('newNotes');
})

module.exports = router;