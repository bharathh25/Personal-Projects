var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const url = require('url');

router.get('/', function(req, res, next) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const current_url = new URL(fullUrl);
    console.log(current_url);
    const search_params = current_url.searchParams;
    const id = search_params.get('task_id');
    console.log(id);
    var sql = 'select * from TaskStatus';
     var sql1 = 'SELECT th.ticketHistoryId_TicketHistory,th.taskId_TicketHistory,th.taskName_TicketHistory,TU.usersName_Users AS ToUSER,FU.usersName_Users AS FromUser,C.categoryName_Category,th.startDate_TicketHistory,th.endDate_TicketHistory,th.ticketHistoryDate_TicketHistory, TS.statusName_TaskStatus,th.comment_TicketHistory from tickethistory th left join  users TU On th.ToUserId_TicketHistory = TU.usersId_Users LEFT JOIN users FU ON th.fromUserId_TicketHistory = FU.usersId_Users LEFT JOIN taskstatus TS ON th.statusId_TicketHistory = TS.statusId_TaskStatus  LEFT JOIN category C ON th.categoryId_TicketHistory = C.categoryId_Category where taskId_TicketHistory =' + id;

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
                res.render('detailed_raised_task',{'err' : '', statuses : result,  taskHistory : result1, fullName : req.session.fullName, is_admin : req.session.isAdmin})
                con.end();
            }
        })
    })      
    });     

});
module.exports = router;  