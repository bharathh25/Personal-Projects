var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next) {
    if(req.session.userName != 'admin') {
        res.redirect('/login');
    }
    if(req.session.categories.length > 0) {
        console.log(req.session.categories.length)
        res.render('create_user',{'err':"",categories:req.session.categories, success:'',fullName : req.session.fullName})
    } 
    else {
        res.render('login', {'err': "Create a category"})
    }
});

router.post('/', function(req, res, next) {
    var sql = 'insert into Users(usersName_Users,fullName_Users,mobNo_Users,email_Users,address_Users,categoryId_Users,isAdmin_Users,password_Users ) values( "'+ req.body.u_name +'","'+ req.body.full_name +'","'+ req.body.mob +'","'+ req.body.email +'","'+ req.body.addr +'","'+ req.body.category +'","0","'+ req.body.passwd +'")';
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
            if (err) {
                res.render('create_user',{'err':'user name unavailable','success':'',categories : req.session.categories,fullName : req.session.fullName});
            } 
            else{
                res.redirect('/administrator');
            }
            con.end();
        });
    });
});

module.exports = router;