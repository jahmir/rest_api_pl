const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja')

//get list of ninjas from db
router.get('/ninjas', function(req, res, next){
    res.send({type:'GET'})
})


//add a new ninja to db
router.post('/ninjas', function(req, res, next){
    // var ninja = new Ninja(req.body);
    // ninja.save();
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja)
    }).catch(next)
})

//update a ninja in the db
router.put('/ninjas/:id', function(req, res){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja)
        })
    })
})

//delete a ninja from the db
router.delete('/ninjas/:id', function(req, res){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja)
    })
})

module.exports = router;