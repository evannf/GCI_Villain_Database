const { urlencoded } = require('express')
const express = require('express')
const router = express.Router()
const Villain = require("../models/villains.js")


// SEED
router.get('/seed', async (req, res) => {
    const villains =
    [
        {
            name: 'Phanthom Limb',
            age: 45,
            img: 'https://play-images-prod-catalog.tech.tvnz.co.nz/31537666-31537905.jpeg',
            abilities: 'Invisible limbs that can kill with a simple touch, deflect projectiles, and can detach to be used at length.',
            bio: "A current member of the new Council. Following a disagreement with the Guild, Limb attempted to overthrow the Sovereign and seize control of the Guild. His crimes were forgiven due to his hand in bringing the Guild out of a dark age after the Sovereign went mad.",
            nemesis: "N/A"
        }
        // }, {
        //     name: { type: String, required: true },
        //     age: Number,
        //     img: String,
        //     abilities: String,
        //     bio: String,
        //     nemesis: String
        // },{
        //     name: { type: String, required: true },
        //     age: Number,
        //     img: String,
        //     abilities: String,
        //     bio: String,
        //     nemesis: String
        // }
    ]
    try {
        const seedItems = await Villain.create(villains)
        res.send(seedItems)
      } catch (err) {
        res.send(err.message)
      }
})


//Index
router.get('/', (req, res) => {
    Villain.find({}, (error, villains) => {
      res.render("index.ejs", {villains})
    })
  });
  
//Show
router.get('/:id', async (req, res) => {
    const villain = await Villain.findById(req.params.id);
    res.render('show.ejs', {
      villain: villain,
    })
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
      res.redirect('/villains')
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