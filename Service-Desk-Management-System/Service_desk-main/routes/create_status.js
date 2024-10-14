var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next) {
    if(req.session.userName!= 'admin') {
        res.redirect('/login');
    }
    res.render('create_status', {'err':'',fullName : req.session.fullName});
});

router.post('/', function(req, res, next) {
    var sql = 'insert into TaskStatus(statusName_TaskStatus ,statusDesc_TaskStatus) values( "' + req.body.status_name + '","' + req.body.status_desc + '")';
    console.log(sql);
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "service_desk"
        });
    con.connect(function(err) {
        if (err) throw err; 
        console.log("Connected!");
        con.query(sql, function (err, result) 
        {
            console.log(result);
            if (err) {
                res.render('create_status',{'err':'user name unavailable','success':'',categories : req.session.categories,fullName : req.session.fullName});
            } 
            else{
                res.redirect('/administrator');
            }
            con.end();
        });
    });
});

module.exports = router;

