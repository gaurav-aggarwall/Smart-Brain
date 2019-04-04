const Router = require('express').Router;

const database = require('../db');

const router = Router();


// Existing User Log In 
router.post('/login', (req,res) => {
    const userEmail = req.body.email;
    const userPass = req.body.password;
    
    let exist = false;

    database.forEach(user => {
        if (user.email == userEmail && user.password == userPass){
            return exist = true;
        }
    });

    if(exist){
        res.send('Authenticated');
    }
});


// New User Register 
router.post('/register', (req,res) => {
    const newUser = {
        id: (database[database.length -1].id) + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        detection: 0,
        joined: new Date()
    }

    database.push(newUser);
    res.json(newUser);
});

module.exports = router;