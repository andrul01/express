
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
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// routes
app.get('/',async (req, res) => {
  const contacts = await Contact.find()
  // res.json(contacts);
  res.render('home', {contacts});
});

app.get('/show-contact/:id',async (req, res) => {
    const contact = await Contact.findById({ _id: req.params.id})
    // res.json(contact)
    res.render('show-contact', ({contact}));
});

app.get('/add-contact', (req, res) => {
  res.render('add-contact')
});

app.post('/add-contact',async (req, res) => {

  // for json data
  // res.send(req.body)
  
  const contact = await Contact.insertOne({ 
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address
   })

  // mongoose method for minimum code 
  // await Contact.create(req.body)

  res.redirect("/")

});

app.get('/update-contact', (req, res) => {
    res.render('update-contact');
});

app.get('/delete-contact', (req, res) => {
    res.render('delete-contact');
});
 