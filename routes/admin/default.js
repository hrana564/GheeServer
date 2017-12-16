var express = require('express');
var router = express.Router();
var UserModel = require('../../models/user.js');
var config = require('../../utilities/config');
var EmailUitlity =require('../../utilities/email');
var path = require('path');


router.get('/',function(request,response){
     response.sendFile(path.join(__dirname + '/../../webPages/Admin/index.html'));
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