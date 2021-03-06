var mongoose = require('mongoose');
var assert = require('assert');

var Dishes = require('./models/dishes-1.js');

var url = 'mongodb://localhost:27017/coursera';

mongoose.connect(url);
var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open',function() {
  //console.log("Connected correctly to server");

  var newDish = Dishes({
    name: "Uthapizza_teswwt",
    description:'Test'
  });
  newDish.save(function(err){
    if(err) throw err;
    console.log('Dish created');

    //Find dishes
    Dishes.find({},function(err,dishes){
      if(err) throw err;
      console.log(JSON.stringify(dishes));
        db.collection('dishes').drop(function(){
          db.close();
        });
    });
  });
});

