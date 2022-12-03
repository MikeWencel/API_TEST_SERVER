const express = require('express');
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'List of people'
    });
});

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message: 'Rescource created'
    });
});

router.get('/:peopleID',(req,res,next)=>{
    res.status(200).json({
        message: 'Person detail',
        orderID: req.params.orderID
    });
});

router.patch('/:peopleID',(req,res,next)=>{
    res.status(200).json({
        message: 'Person details updated',
        orderID: req.params.orderID
    });
});

router.delete('/:peopleID',(req,res,next)=>{
    res.status(200).json({
        message: 'Person deleted',
        orderID: req.params.orderID
    });
});


module.exports = router;