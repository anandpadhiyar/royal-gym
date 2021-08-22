const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connnected');
});

var kittySchema = new mongoose.Schema({
	name: String
});
kittySchema.methods.speak = function () {
    var greeting = 'My name is ' + this.name;
    console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

var annadKitty = new Kitten({name : 'anand kitty'});
// console.log(annadKitty.name);
// annadKitty.speak();

annadKitty.save(function(err, anandKitty) {
    if(err) return console.log(err);
    anandKitty.speak();
});

Kitten.find({name: 'anand kitty'}, function(err, kittens) {
    if (err) return console.log(err);
    console.log(kittens);
});