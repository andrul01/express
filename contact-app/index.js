
// create server
const express = require('express');;
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); 

// middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/show-contact', (req, res) => {
    res.render('show-contact');
});

app.get('/add-contact', (req, res) => {
  res.render('add-contact');
});

app.get('/update-contact', (req, res) => {
    res.render('update-contact');
});

app.get('/delete-contact', (req, res) => {
    res.render('delete-contact');
});
 