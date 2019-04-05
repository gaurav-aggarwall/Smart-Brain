const Router = require('express').Router;

const database = require('../db');

const router = Router();

// Updating User Image Detection value 
router.post('/image', (req,res) => {
    const id = req.body.id; 
    
    let exist = false;

    database.users.forEach(user => {
        if (user.id === id){
            exist = true;
            user.detection++;
            res.json(user.detection);
        }
    });

    if(!exist){
        res.status(400).send('No user found');
    } 
});


// Searching for particular User with ID 
router.post('/:id', (req,res) => {
    const id = req.params.id; 
    
    let exist = false;

    database.users.forEach(user => {
        if (user.id == id){
            exist = true;
            res.json(user);
        }
    });

    if(!exist){
        res.status(400).send('No user found');
    } 
});


module.exports = router;