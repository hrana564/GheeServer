var PORT = process.env.PORT || 8000;
var config = require('./utilities/config.js');
var defaultRouter=require('./routes/default');
var signupRouter=require('./routes/signup');
var logoutRouter = require('./routes/logout');
var resetPasswordRouter = require('./routes/resetpassword');
var forgotPasswordRouter = require('./routes/forgotpassword');

var adminController = require('./routes/admin/default');
var orderController = require('./routes/admin/orders');
var priceController = require('./routes/admin/Price');

var DB = config.database;
var mongoose = require('mongoose');
var session =  require('express-session');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var morgan = require('morgan');
mongoose.Promise = require('bluebird');
var cors = require('cors');

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({secret : config.secretKey,resave:false,saveUninitialized:true,cookie:{maxAge:1000*60*60}}));
// use it before all route definitions
app.use(cors({origin: '*'}));
app.use('/',defaultRouter);
app.use('/login',defaultRouter);
app.use('/signup',signupRouter);
app.use('/forgotPassword',forgotPasswordRouter);
app.use('/resetPassword',resetPasswordRouter);
app.use('/logout',logoutRouter);
app.use('/Admin',adminController);
app.use('/Admin/Order',orderController);
app.use('/Admin/Price',priceController);

app.use('/webPages', express.static(__dirname + '/webPages'));

// app.use('/home',homeRouter);
mongoose.connect(config.database, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to mongoDB");
    }
});
// app.set('views', __dirname + '\\views');
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);   
app.use(express.static(path.join(__dirname, 'webPages')));



app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});