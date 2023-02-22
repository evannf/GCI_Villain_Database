require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT||3000;
const methodOverride = require('method-override');
const mongoose = require('mongoose')
const Villain = require('./models/villains.js')
// const path = require('path');

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'))
//     res.render("main.ejs");
// });

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const villainsController = require('./controllers/villainsController.js')

app.use('/villains', villainsController)

app.get('/', (req, res) => {
    res.render("main.ejs")
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT} 🦹🏻‍♂️`)
})