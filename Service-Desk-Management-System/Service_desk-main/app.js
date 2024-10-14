var createError = require('http-errors');
var express = require('express');
const session = require("express-session");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var login = require('./routes/login');
var admin_login = require('./routes/admin_login');
var administrator = require('./routes/administrator');
var view_users = require('./routes/view_users');
var view_categories = require('./routes/view_categories');
var view_status = require('./routes/view_status');
var create_category = require('./routes/create_category');
var create_user = require('./routes/create_user');
var create_status = require('./routes/create_status');
var create_task = require('./routes/create_task');
var user_login = require('./routes/user_login');
var viewAssigned_task = require('./routes/viewAssigned_task');
var viewRaised_task = require('./routes/viewRaised_task');
var admin_raised = require('./routes/admin_raised');
var admin_assigned = require('./routes/admin_assigned');
var admin_unassigned = require('./routes/admin_unassigned');
var cat_admin = require('./routes/cat_admin');
var assign_task = require('./routes/assign_task');
var detailed_assigned_task = require('./routes/detailed_assigned_task');
var detailed_raised_task = require('./routes/detailed_raised_task');
var about = require('./routes/about');

var app = express();
app.use(cookieParser());
 
app.use(session({
    secret: "amar",
    saveUninitialized: true,
    resave: true
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', login);
app.use('/admin_login', admin_login);
app.use('/administrator',administrator);
app.use('/view_users',view_users);
app.use('/view_categories',view_categories);
app.use('/view_status',view_status);
app.use('/create_category',create_category);
app.use('/create_user',create_user);
app.use('/create_status',create_status);
app.use('/create_task',create_task);
app.use('/user_login',user_login);
app.use('/viewAssigned_task',viewAssigned_task);
app.use('/viewRaised_task',viewRaised_task);
app.use('/admin_raised',admin_raised);
app.use('/admin_assigned',admin_assigned);
app.use('/admin_unassigned',admin_unassigned);
app.use('/cat_admin',cat_admin);
app.use('/assign_task',assign_task);
app.use('/detailed_assigned_task',detailed_assigned_task);
app.use('/detailed_raised_task',detailed_raised_task);
app.use('/about',about);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;