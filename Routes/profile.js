const Router = require('express').Router;

const db = require('../db').db;

const router = Router();


// Updating User Image Detection value 
router.post('/image', (req,res) => {
    const id = req.body.id; 
    
    db('users')
    .where('id', '=', id)
    .increment('detection', 1)
    .returning('detection')
    .then(detection => {
        if(detection.length){
            res.json(detection[0]);
        } else {
            res.status(400).json('No user found');
        }
    }).catch(err => res.status(400).send('Error! Please try again later.'));
});


// Searching for particular User with ID 
router.post('/:id', (req,res) => {
    const id = req.params.id;  

    db('users')
    .select('*')
    .where('id', '=', id)
    .then(user => {
        if(user.length){
            res.json(user[0]);
        } else {
            res.status(400).json('No user found');
        }
    }).catch(err => res.status(400).json('Error! Please try again later.'));
});


module.exports = router;