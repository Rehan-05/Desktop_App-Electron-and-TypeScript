var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
var bodyParser = require('body-parser');


var app = express();


const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:1212"
};

app.use(cors(corsOptions));

const db = require("./model");
const Role = db.role;
// Mongo CONNECTION

mongoose.connect('mongodb://localhost:27017/ProjectAlliance',
);


const Database = mongoose.connection;
Database.on("error", console.error.bind(console, "connection error: "));
Database.once("open", function () {
  console.log("Connected successfully");
  initial()
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());



app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api/users', usersRouter);

require('./routes/auth.routes')(app)
require('./routes/admin.routes')(app)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("error genrated here ok")
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




function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}


module.exports = app;
