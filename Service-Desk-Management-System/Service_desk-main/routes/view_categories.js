var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next) {
    var sql = 'select * from Category';
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "service_desk"
        });
    con.connect(function(err) {
        if (err) 
            throw err; 
        console.log("Connected!");
        con.query(sql, function (err, result) 
        {
            if (err) throw err;
            else{
                res.render('view_categories',{'err' : '', categories : result, fullName : req.session.fullName})
                con.end();
            }
        })        
    });     

});

module.exports = router;  