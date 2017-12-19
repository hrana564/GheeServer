var express = require('express');
var router = express.Router();
var PriceModel = require('../../models/Price.js');
var config = require('../../utilities/config');
var EmailUitlity =require('../../utilities/email');
var path = require('path');


router.get('/',function(request,response){
     PriceModel.findOne({},function(err,resource){
        if(err || !resource){
            console.log(err);
            response.sendStatus(404);
        }else{
            response.send(JSON.stringify(resource));
        }
     });
    });

router.post('/',function(request,response){
     PriceModel.updateOne({},{productPrice : request.body.productPrice},function (err,resource) {
            if(err || !resource){
                response.sendStatus(404);
            } else{
                response.sendStatus(200);
            }
        });
    });
module.exports = router;