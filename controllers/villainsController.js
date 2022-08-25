const express = require('express')
const router = express.Router()
const db = require('../models')
const Villain = require("../models/villains.js")

//Index
router.get('/', (req, res) => {
    Villain.find({}, (error, villains) => {
      res.render("index.ejs", {villains})
    })
  });

// NEW
router.get('/new', (req, res) => {
	res.render('new.ejs');
});
  
//Show
router.get('/:id', async (req, res) => {
    const villain = await Villain.findById(req.params.id);
    res.render('show.ejs', {
      villain: villain,
    })
});

//New
router.post('/', (req, res) => {
    Villain.create(req.body, (err, newVillain) => {
        if(err) {
            console.log('error', error);
            res.send(error);
        } else {
            res.redirect('/villains')
        }
    });
});
  
//Edit
router.get('/:id/edit', (req, res) => {
    Villain.findById(req.params.id, (err, foundVillain) => {
      res.render('edit.ejs', {villain: foundVillain})
    })
});
  
//Update
router.put('/:id', (req, res) => {
    Villain.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateModel) => {
      res.redirect(`/villains/${req.params.id}`)
    })
});
 
//Delete
router.delete('/:id', (req, res) => {
      Villain.findByIdAndRemove(req.params.id, (err, data)=> {
          if(err) console.log(err)
          res.redirect('/villains')
      })
});
  
  
  
module.exports = router