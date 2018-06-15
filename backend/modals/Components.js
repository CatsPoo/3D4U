var mongoose = require('mongoose');
var config = require('../config/database');

var ComponentSchema = mongoose.Schema({
    name:{type:String,required:true},
    avgPrice:{type:Number,required:true},
    imageUrl:{type:String,required:true},
    subComponents:{type:[this],required:false}
});

module.exports = mongoose.model('Component', ComponentSchema);

module.exports.addComponent = function(newComponent, callback) {
    newComponent.save(callback);
}
