var mongoose = require('mongoose');
var config = require('../config/database');

var component=require('./Components');

var TransactionSchema = mongoose.Schema({
    dateOfSell:{type:String,required:true},
    customerName:{type:String,required:true},
    requiredText:{type:String,required:true},
    status:{type:string,required:true},
    providedDate:{type:String,required:false},
});

module.exports = mongoose.model('Transaction', ComponentSchema);

module.exports.addTransaction = function(newTransaction, callback) {
    newTransaction.save(callback);
}

