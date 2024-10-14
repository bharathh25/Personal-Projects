var express = require('express');
var router = express.Router();
var mysql = require('mysql');
router.get('/', function(req, res, next) {
    if(req.session.userName != 'admin') {
        res.redirect('/login');
    }
    res.render('create_category', {'err':'',fullName : req.session.fullName});
});
router.post('/', function(req, res, next) {
    var sql = 'insert into Category(categoryName_Category,categoryDesc_Category) values( "' + req.body.cat_name + '","' + req.body.cat_desc + '")';
    var sql1='select * from Category';
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
                con.query(sql1, function(err, result1)
                {
                    if(err) throw err;
                    if(result1.length > 0)
                        req.session.categories = result1;

                    console.log(result);
                    if (err) 
                    {
                        res.render('create_category', {'err': 'error occured',fullName : req.session.fullName}) 
                    }
                    else {
                        console.log("inside if");
                        
                        res.redirect('/administrator');//('create_category', {'err': req.body.cat_name+ 'added',full_name : req.session.full_name})
                    }          
                    con.end();
                });
            });
        });
    });
    
    module.exports = router;