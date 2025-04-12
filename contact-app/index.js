
// create server
const express = require('express');
const app = express();
const port = 3000;

// Connection 
const mongoose = require('mongoose');
const Contact = require("./models/contacts.models");

mongoose.connect('mongodb://127.0.0.1:27017/contacts-crud')
.then(() => console.log("Connection Success"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); 

// middleware
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))


// routes
// Home
app.get('/',async (req, res) => {
  const contacts = await Contact.find()
  // res.json(contacts);
  res.render('home', {contacts})
});

// Show
app.get('/show-contact/:id',async (req, res) => {
    const contact = await Contact.findById({ _id: req.params.id})
    // res.json(contact)
    res.render('show-contact', ({contact}));
});

// Add
app.get('/add-contact', (req, res) => {
  res.render('add-contact')
});

app.post('/add-contact',async (req, res) => {
  const contact = await Contact.insertOne({ 
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address
  })
  res.redirect("/")
  // for json data
  // res.send(req.body)
  // mongoose method for minimum code (only use if form field is same as database field)
  // await Contact.create(req.body)
});


// Update 
app.get('/update-contact/:id',async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  res.render('update-contact', {contact})
});

app.post('/update-contact/:id',async (req, res) => {
  // mongoose method for minimum code (only use if form field is same as database field) 
  await Contact.findByIdAndUpdate(req.params.id, req.body)
  res.redirect("/")

  // for json data
  // res.send(req.body)
});

// Delete
app.get('/delete-contact/:id',async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id)
  res.redirect("/")
  // res.render('delete-contact')
});
 