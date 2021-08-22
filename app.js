const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

//connecting to mongodb database - test is here db name
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

//definging schema for collection
const contactSchema = new mongoose.Schema({
	name: String,
	contact: String,
	age: String,
	gender: String,
	more: String
});
//Making model from schema
const Contact = mongoose.model('Contact', contactSchema);

//EXPRESS STUFF

//
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug'); //set view engine as pug
app.set('views', path.join(__dirname, 'views'));  //setting path for view files
app.use('/static', express.static(path.join(__dirname, 'static'))); //setting path for static files

//This will help in post request, converting req.body in json format
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

// app.get('/', (req, res) => {
// 	res.send('This is my first express app');
// });

app.get('/', (req, res) => {
	res.status(200).render('index', { title: 'Anand webpage', message: 'This is first pug app' });
});

app.get('/about', (req, res) => {
	res.status(200).render('about', { title: 'Anand webpage', message: 'This is first pug app' });
});
app.get('/contact', (req, res) => {
	res.status(200).render('contact', { title: 'Anand webpage', success: "" });
});

app.post('/contact', (req, res) => {
	// console.log(req.body);
	//Making a document
	var myData = new Contact(req.body);
	//saving a document and then giving response to it
	myData.save().then(() => res.render('contact', { success: 'Item saved successfully' }))
});

app.post('/about', (req, res) => {
	res.status(400).send(`This page is not found`);
});

app.listen(port, () => {
	console.log(`This application started on ${port} port`);
});

