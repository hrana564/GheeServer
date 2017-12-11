var express = require('express');
var router = express.Router();
var OrderModel = require('../models/order.js');
var config = require('../utilities/config');
var EmailUitlity =require('../utilities/email');


router.get('/',function(request,response){
     OrderModel.find({},function (err,resource) {
            if(err){
                response.sendStatus(404);
            } else{
                response.setHeader('Content-Type', 'application/json');
                response.send(JSON.stringify(resource));
            }
        });
    });

router.post('/', function(request, response) {
    console.log(request.body);
    var order = new OrderModel(request.body);
    order.save(function(err, resource) {
        if (err) {
            console.log('error while saving on database. '+err);
            response.sendStatus(404);
        } else {
            try{
                EmailUitlity.SendRetailEmail("hrana564@gmail.com", '', '', 'Welcome to '+config.AppName+'. ✔', '', "Hi "+order.orderName+", <br /> Welcome to <b>"+config.AppName+"</b>. <br /> You have been successfully registerd. Please start exploring!", function () {
                response.sendStatus(200);
            });
            }catch (ex){
                console.log('error while sending email. '+ex);
                response.sendStatus(200);
            }
        }
    });
});
module.exports = router;