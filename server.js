require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT||3000;
const methodOverride = require('method-override');
const mongoose = require('mongoose')
const Villain = require('./models/villains.js')

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const villainsController = require('./controllers/villainsController.js')

app.use('/villains', villainsController)

app.get('/', (req, res) => {
    res.send("Welcome to the Guild")
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT} 🦹🏻‍♂️`)
})