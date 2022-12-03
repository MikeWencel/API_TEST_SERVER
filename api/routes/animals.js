const express = require('express');
const router = express.Router()

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Animals GET request'
    })
});

router.post('/', (req, res, next)=>{
    res.status(201).json({
        message: 'Animals POST request'
    })
});

router.patch('/:animalID', (req, res, next)=>{
    res.status(200).json({
        message: 'Animal updated'
    })
});

router.delete('/:animalID', (req, res, next)=>{
    res.status(200).json({
        message: 'Animal deleted'
    })
});


router.get('/:animalID', (req, res, next)=>{
    const id = req.params.animalID;
    if (id === 'special'){
        res.status(200).json({
            message: "You discovered special places",
            id: id
        });
    }else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
});

module.exports = router;