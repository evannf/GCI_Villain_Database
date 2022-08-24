const mongoose = require('mongoose')

const villainSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    img: String,
    abilities: String,
    bio: String,
    nemesis: String
})

const Villain = mongoose.model('Villains', villainSchema);

module.exports = Villain