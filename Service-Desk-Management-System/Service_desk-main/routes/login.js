var express = require('express');
var router = express.Router();
var mysql = require('mysql');
// var luxon  = require('luxon');

router.get('/', function(req, res, next) {
    res.render('login', {'err':''});
});

router.post('/', function(req, res, next) {
    var sql = 'select * from Users where usersName_Users="' + req.body.username+ '" and  password_Users="' +req.body. password+'"';
    var sql1 = 'select * from Category where categoryId_Category != 1';
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
                if(result1.length > 0)
                    req.session.categories = result1;
                if(result.length == 1) {
                    console.log(result[0]);
                    req.session.userName = result[0]["usersName_Users"];
                    req.session.userId = result[0]["usersId_Users"];
                    req.session.categoryId = result[0]["categoryId_Users"];
                    req.session.isAdmin = result[0]["isAdmin_Users"];
                    req.session.fullName = result[0]["fullName_Users"];
                    
                    
                    req.session.save();
                    console.log(req.session.userName);
                    console.log(req.session.userId);
                    console.log(req.session.categoryId);
                    console.log(req.session.isAdmin);
                    console.log(req.session.fullName);
                    if((result[0]["usersName_Users"]=='admin') || (result[0]["isAdmin_Users"]==1))
                        res.render('login', {'err': 'Invalid username or password'})
                    else
                        res.redirect('/user_login');
                    
                } else {
                    res.render('login', {'err': 'Invalid username or password'})
                }
                con.end();
            });
        });
    });
});

module.exports = router;