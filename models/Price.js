var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PriceSchema = new Schema({
    productPrice:{type: String,
        unique : true
    },
    lastUpdatedOn : {type: Date, default: Date.now()},
    lastUpdatedBy: {type : String, default:"test", required:[true,'Price updated by is Mandatory.']}
});

var PriceModel = mongoose.model('Price', PriceSchema);

module.exports = PriceModel;