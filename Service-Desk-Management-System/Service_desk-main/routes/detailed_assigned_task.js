var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const url = require('url');

router.get('/', function(req, res, next) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const current_url = new URL(fullUrl);
    console.log(current_url);
    const search_params = current_url.searchParams;
    req.session.TaskId = search_params.get('task_id');
    //console.log(id);
    var sql = 'select * from TaskStatus';
    // var sql1 = 'select * from TicketHistory where taskId_TicketHistory =' + req.session.TaskId;
    var sql1 = 'SELECT th.ticketHistoryId_TicketHistory,th.taskId_TicketHistory,th.taskName_TicketHistory,TU.usersName_Users AS ToUSER,FU.usersName_Users AS FromUser,C.categoryName_Category,th.startDate_TicketHistory,th.endDate_TicketHistory,th.actualEndDate_TicketHistory,th.ticketHistoryDate_TicketHistory, TS.statusName_TaskStatus,th.comment_TicketHistory from tickethistory th left join  users TU On th.ToUserId_TicketHistory = TU.usersId_Users LEFT JOIN users FU ON th.fromUserId_TicketHistory = FU.usersId_Users LEFT JOIN taskstatus TS ON th.statusId_TicketHistory = TS.statusId_TaskStatus  LEFT JOIN category C ON th.categoryId_TicketHistory = C.categoryId_Category where taskId_TicketHistory =' + req.session.TaskId;
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
            req.session.statuses = result;
            con.query(sql1,function(err, result1)
            {
                if(err) throw err;
            else{
                res.render('detailed_assigned_task',{'err' : '', statuses : req.session.statuses, taskHistory : result1, fullName : req.session.fullName, is_admin : req.session.isAdmin})
                con.end();
            }
        })
    })      
    });
});

router.post('/', function(req, res, next) {   
    var curDateTime = new Date();
    var date = convertDate(curDateTime);
    //console.log(date); 
    function convertDate(date) {
        var day = date.getDate();
        day = day < 10 ? "0" + day : day;
        var month = date.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        var year = date.getFullYear();
        var h = date.getHours();
        var min = date.getMinutes();
        var date =  year + "-" + month + "-" + day + "T" + h + ":" + min;
        return date;
    }
    //Update Task set statusId_Task = 2 where taskId_Task = 5;
    var sql = 'select * from Task where taskId_Task=' + req.session.TaskId;
    var sql1 = 'update Task set statusId_Task = ' + req.body.status + ' where taskId_Task = ' + req.session.TaskId + ';';
    var sql3 = 'SELECT th.ticketHistoryId_TicketHistory,th.taskId_TicketHistory,th.taskName_TicketHistory,TU.usersName_Users AS ToUSER,FU.usersName_Users AS FromUser,C.categoryName_Category,th.startDate_TicketHistory,th.endDate_TicketHistory,th.ticketHistoryDate_TicketHistory, TS.statusName_TaskStatus,th.comment_TicketHistory from tickethistory th left join  users TU On th.ToUserId_TicketHistory = TU.usersId_Users LEFT JOIN users FU ON th.fromUserId_TicketHistory = FU.usersId_Users LEFT JOIN taskstatus TS ON th.statusId_TicketHistory = TS.statusId_TaskStatus  LEFT JOIN category C ON th.categoryId_TicketHistory = C.categoryId_Category where taskId_TicketHistory =' + req.session.TaskId;
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "service_desk"
    });
    con.connect(function(err) {
        if (err) throw err; 
        console.log("Connected!");
        //Running Select Task
        con.query(sql, function (err, result) 
        {
            if (err) throw err;
            console.log(result);
            //Insert into TickerHistory
            console.log(convertDate(result[0]["startDate_Task"]))
            var sql2 = 'insert into TicketHistory (taskId_TicketHistory,taskName_TicketHistory,fromUserId_TicketHistory ,ToUserId_TicketHistory ,categoryId_TicketHistory,startDate_TicketHistory,endDate_TicketHistory,ticketHistoryDate_TicketHistory,statusId_TicketHistory,comment_TicketHistory ) values(' + req.session.TaskId + ',"'+ result[0]["taskName_Task"] +'",'+ result[0]["fromUserId_Task"] +','+ result[0]["toUserId_Task"] +','+ result[0]["categoryId_Task"] +',"'+ convertDate(result[0]["startDate_Task"]) +'","'+ convertDate(result[0]["endDate_Task"]) +'","'+ date +'",' + req.body.status + ',"'+ req.body.comment+'");';
            console.log(sql2);
            //Running update Task
            con.query(sql1, function(err, result1)
            {
                if (err) throw err;
                //Running Insert into TickerHistory
                con.query(sql2, function(err, result2){
                    if(err) throw err;
                    //Running select * from TicketHistory
                    con.query(sql3, function(err, result3){
                        if(err) throw err;
                        console.log(result3);
                        res.render('detailed_assigned_task',{'err' : '', statuses : req.session.statuses , taskHistory : result3, fullName : req.session.fullName, is_admin : req.session.isAdmin});
                        con.end();
                    });
                });  
            });
        });
    });
});


module.exports = router;  