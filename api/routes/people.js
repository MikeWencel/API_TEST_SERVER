const express = require('express');
const router = express.Router();
const mongoose =  require('mongoose');
const Person = require('../models/people');

router.get('/',(req,res,next)=>{
    const id = req.params.personId;
    Person.find()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err}))
});

router.post('/', (req, res, next)=>{
    const person = new Person({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        lastName: req.body.lastName,
    })
    person.save();
    res.status(201).json({
        message: 'Person created',
        createdPerson: person
    })
});

router.get('/:personId',(req,res,next)=>{
    const id = req.params.personId;
    Person.findById(id)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err}))

})

router.get('=?/:name',(req,res,next)=>{
    const name = req.params.name;
    Person.findById(name)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err}))

})

router.patch('/:personId',(req,res,next)=>{
    const id = req.params.personId;
    Person.findByIdAndUpdate(id, { $set: req.body }, { new: true})
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err}))

})

router.delete('/:personId',(req,res,next)=>{
    const id = req.params.personId;
    Person.findByIdAndDelete(req.params.personId)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err}))

})


module.exports = router;