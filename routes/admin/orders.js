var express = require('express');
var router = express.Router();
var UserModel = require('../../models/user.js');
var OrderModel = require('../../models/order.js');
var config = require('../../utilities/config');
var EmailUitlity =require('../../utilities/email');
var path = require('path');


router.get('/',function(request,response){
     OrderModel.find({},function(err,resource){
        if(err){
            response.sendStatus(404);
        }else{
            response.send(JSON.stringify(resource));
        }
     });
    });

router.post('/',function(request,response){
     UserModel.findOne({userName:request.body.userName ,password:request.body.password},function (err,resource) {
            if(err || !resource){
                response.sendStatus(404);
            } else{
                response.setHeader('Content-Type', 'application/json');
                resource.password = "";
                response.send(JSON.stringify(resource));
            }
        });
    });
module.exports = router;