var express = require('express');
var router = express.Router();;

var component= require('./../modals/Components');
var product=require('./../modals/Products');
var transaction=require('./../modals/Transactions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/addComponent', function (req, res, next) {
  let newComponent;
  if (req.body.subComponents) {
    newComponent = new component({
      name: req.body.name,
      avgPrice: req.body.avgPrice,
      imgUrl: req.body.imgUrl,
      subComponents: req.body.subComponents
    });
  }
  else {
    newComponent = new component({
      name: req.body.name,
      avgPrice: req.body.avgPrice,
      imgUrl: req.body.imgUrl
    });
  }

  component.addNewComponent(newComponent,(err,res)=>{
    if(err)
    {
       //TODO send error message
    }
    else{
      //TODO send seccess message
    }
  });
});

router.post('/addPoduct', function(req, res, next) {
  newProduct = new product({
    name: req.body.name,
    components:req.body.components,
    imgUrl: req.body.imgUrl,
  });

  product.addNewProduct(newProduct,(err,res)=>{
    if(err)
    {
       //TODO send error message
    }
    else{
      //TODO send seccess message
    }
  });
});

router.post('/addTransaction', function(req, res, next) {
  newTransaction = new transaction({

  });

  product.addNewProduct(newProduct,(err,res)=>{
    if(err)
    {
       //TODO send error message
    }
    else{
      //TODO send seccess message
    }
  });
});

router.post('/getAllComponent', function(req, res, next) {

});

router.post('/getAllPoduct', function(req, res, next) {
  
});

router.post('/getAllTransaction', function(req, res, next) {
  
});

module.exports = router;
