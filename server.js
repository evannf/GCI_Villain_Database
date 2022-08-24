const express = require('express')
const app = express()
const methodOverride = require('method-override');
const mongoose = require('mongoose')
const Product = require('./models/villains.js')

const mongoURI = 'mongodb://localhost:27017/inventory'
mongoose.connect(mongoURI, () => {
    console.log('the connection with mongobd is established')
})

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const villainsController = require('./controllers/villainsController.js')

app.use('/villains', villainsController)

app.get('/', (req, res) => {
    res.send("Welcome to the Guild")
})

app.listen(3000, () => {
    console.log('server running on port 3000 🦹🏻‍♂️')
})