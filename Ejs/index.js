// old way
// const express = require('express');

// ES6 new way
import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Home Page');
})

// app.get('/about', (req, res) => {
//     res.render('about');
// })
app.get('/about', (req, res) => {
    var users = [
        {name:"Andrul", age: 20},
        {name:"Neo", age: 25},   
        {name:"Ronin", age: 10},
    ];
    res.render('about', {
        title: "About Us",
        message: "Welcome to the about page",
        items: users
    });
})

app.get('/form', (req, res) => {
    res.render('form', {message: null} ) 
})

app.post('/submit', (req, res) => {
    const name = req.body.myname
    const message = `${name} form submitted successfully.`
    res.render('form', { message: message })
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})