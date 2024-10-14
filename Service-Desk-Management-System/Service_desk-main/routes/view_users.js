var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next) {
    var sql = 'select * from Users';
    
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
                res.render('view_users',{'err' : '', users : result, fullName : req.session.fullName})
                con.end();
            }
        })        
    });     
});

router.post('/', function(req, res, next) {
    var sql = 'delete from Users where usersId_Users=' + req.body.hiddenUserId +';';
    var sql1 = 'select * from Users;'
    
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
            con.query(sql1, function (err, result1) 
            {
                if (err) throw err;

                else{
                    res.render('view_users',{'err' : '', users : result1 , fullName : req.session.fullName})
                    con.end();
                }
            });
        })        
    });     

});

module.exports = router;   