var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next) {    
    res.render('administrator', {'error':'', fullName : req.session.fullName});
});

router.post('/', function(req, res, next) {
    res.render('administrator', {'error':'', fullName : req.session.fullName});
});
module.exports = router;