var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new Schema({
    // productID: {type: Number, required:true, unique : true},
    Name:{type: String,
        required: [true,'Name is Mandatory.']
    },
    Phone : {
        type : String,
        required: [true,'Phone Nummber is Mandatory.']
    },
    Email: {type :String
    },
    Address : {
        type : String,
        required: [true,'Delivery Address is Mandatory.']
    },
    Message : {
        type : String
    },
    IsDelivered: {
        type : Boolean,
        default : false
    },
    RegisteredOn : {type: Date, default: Date.now()},
    RegisteredBy: {type : String,
        default : "User"}
});

var OrderModel = mongoose.model('Order', OrderSchema);

module.exports = OrderModel;