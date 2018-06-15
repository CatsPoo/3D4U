var mongoose = require('mongoose');
var config = require('../config/database');

var component=require('./Components');

var ProductSchema = mongoose.Schema({
    name:{type:String,required:true},
    components:{type:[component],required:true},
    imageUrl:{type:String,required:true}
});

module.exports = mongoose.model('Product', ComponentSchema);

module.exports.addProduct = function(newProduct, callback) {
    newProduct.save(callback);
}