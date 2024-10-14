var express = require('express');
var router = express.Router();
var mysql = require('mysql');
router.get('/', function(req, res, next) {
    if(req.session.categories.length > 0) {
        console.log(req.session.categories)
        res.render('create_task',{'err':"",categories:req.session.categories, success:'',fullName : req.session.fullName, is_admin : req.session.isAdmin})
    }
    else {
        res.render('login', {'err': "Create a category"})
    }
   
});
router.post('/', function(req, res, next) {
    console.log("create_task post");
    var curDateTime = new Date();

    console.log(curDateTime);
    var s = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    console.log(s);

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

    var date = convertDate(curDateTime);
    console.log(date);

    var sql = 'insert into Task(taskName_Task,taskDesc_Task,categoryId_Task,endDate_Task,startDate_Task,fromUserId_Task,statusId_Task) values( "'+ req.body.t_name +'","'+ req.body.task_desc +'","'+ req.body.category +'","'+ req.body.endtime +'","'+  date +'","'+ req.session.userId +'",'+ 1 +');';
    console.log(sql);
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "service_desk"
        });
        con.connect(function(err) {
            if (err) 
            {
                console.log(err);
                throw err; 
            }
            console.log("Connected!");
            con.query(sql, function (err, result) 
            {
                if (err) {
                    console.log(err)
                    res.render('create_task',{'err':'user name unavailable','success':'',categories : req.session.categories,fullName : req.session.fullName});
                } 
                else{
                    res.redirect('/user_login');
                }
                con.end();
            });
        });
    });   
module.exports = router;
