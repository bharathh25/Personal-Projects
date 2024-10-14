var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next) {
    var sql = 'SELECT t.taskId_Task, t.taskName_Task, t.taskDesc_Task, c.categoryName_Category, TU.usersName_Users AS ToUSER, FU.usersName_Users AS FromUser, t.startDate_Task, t.endDate_Task, ts.statusName_TaskStatus FROM task t LEFT JOIN users TU On t.toUserId_Task = TU.usersId_Users LEFT JOIN users FU ON t.fromUserId_Task = FU.usersId_Users LEFT JOIN taskstatus TS ON t.statusId_Task = TS.statusId_TaskStatus LEFT JOIN category C ON t.categoryId_Task = C.categoryId_Category where t.fromUserId_Task = ' + req.session.userId ;
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
                    res.render('viewRaised_task',{'err' : '', tasks : result, fullName : req.session.fullName, is_admin : req.session.isAdmin})
                    con.end();
                }
            })        
        });     
    
    });
    
    module.exports = router;  
       