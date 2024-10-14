var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next) {
    var sql = 'select * from Task where categoryId_Task =  "' +     req.session.categoryId + '"';
    var sql1='select * from Users where categoryId_Users = "' +      req.session.categoryId + '"';
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
                con.query(sql1,function(err, result1)
                {
                    if(err) throw err;
                else{
                    res.render('assign_task',{'err' : '', tasks : result, to_users:result1, fullName : req.session.fullName})
                    con.end();
                }
            })        
        });     
    
    });
});
router.post('/', function(req, res, next) {
    var sql = 'Update Task set toUserId_Task = '+ req.body.to_id+' WHERE taskId_Task = '+ req.body.task + ';';
    var sql1 = 'select * from Task where categoryId_Task =  "' +     req.session.categoryId + '"';
    var sql2='select * from Users where categoryId_Users = "' +      req.session.categoryId + '"';
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
                if (err) throw err;
                con.query(sql1,function(err, result1)
                {
                    if(err) throw err;
                    con.query(sql2,function(err,result2)
                    {
                        if(err) throw err;
                        else{
                            res.render('assign_task',{'err' : '', tasks : result1, to_users:result2, fullName : req.session.fullName})
                            con.end();
                        }

                        
                    });
              
                });
            });           
    });
});       

module.exports = router;