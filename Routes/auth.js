const Router = require('express').Router;
const db = require('../db').db;

const bcrypt = require('../bcrypt-util');

const router = Router();


// Existing User Log In 
router.post('/login', (req,res) => {
    const userEmail = req.body.email;
    const userPass = req.body.password;

    // database.users.forEach(user => {
    //     if (user.email == userEmail){
    //         bcrypt.compare(userPass, user.password, (err, ans) => {
    //             if(ans){
    //                 res.json('Authenticated');
    //             } else {
    //                 res.status(400).json('Not Authenticated');
    //             }
    //         });
            
    //     }
    // });
       
});


// New User Register 
router.post('/register', (req,res) => {
    const { name, email, password } = req.body;
    db('users').insert({
        name: name,
        email: email,
        joined: new Date()
    }).then(console.log);

    // bcrypt.hash(req.body.password, null, null, (err, hash) =>{
    //     const newUser = {
    //         id: (Number(database.users[database.users.length -1].id) + 1).toString(),
    //         name: req.body.name,
    //         email: req.body.email,
    //         password: hash,
    //         detection: 0,
    //         joined: new Date()
    //     }

    //     database.users.push(newUser);
    //     res.json(newUser);
    // });
    res.json('Hello');
});

module.exports = router;