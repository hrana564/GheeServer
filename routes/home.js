// var express = require('express');
// var router = express.Router();
// var Model = require('../models/model.js');
// var EmailUitlity = require('../utilities/email.js');

// router.get('/users/:id', function(request, response) {
//     console.log('getting a human');
//     var id = request.params.id;
//     Model.findById(id, function(err, res) {
//         if (err) {
//             return response.send(err);
//         } else {
//             var human = res;
//             console.log('made it to else');
//             response.json(human);
//         }
//     });
// });


// router.get('/users', function(request, response) {
//     Model.find({}, function(err, resources) {
//         if (err) {
//             response.send(err).status(404);
//         } else {
//             response.send(resources).status(200);
//         }
//     });
// });

// router.delete('/users/:id', function(request, response) {
//     var id = request.params.id;
//     Model.remove({ _id: id }, function(err, resource) {
//         if (err) {
//             return response.send(err);
//         } else {
//             response.send(resource);
//         }
//     })
// });

// router.post('/users', function(request, response) {
//     var human = new Model(request.body);
//     human.save(function(err, resource) {
//         if (err) {
//             response.send(err).status(501);
//         } else {
//             EmailUitlity.SendRetailEmail("hrana564@gmail.com", '', '', 'Test email from rana sweets. ✔', '', "finally this module works", function () {
//                 response.json(resource).status(201);
//             });
//         }
//     });
// });


// module.exports = router;