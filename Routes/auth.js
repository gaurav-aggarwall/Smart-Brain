const Router = require('express').Router;
const bcrypt = require('bcrypt-nodejs');

const db = require('../db').db;

const router = Router();


// Existing User Log In 
router.post('/login', (req,res) => {
    const userEmail = req.body.email;
    const userPass = req.body.password;

    db('login')
    .select('email', 'hash')
    .where('email', '=', userEmail)
    .then(user => {
        const isValid = bcrypt.compareSync(userPass, user[0].hash);
        if(isValid){
            return db('users')
            .select('*')
            .where('email', '=', userEmail)
            .then(user => res.json(user[0]))
            .catch(err => res.status(400).json('Error! Try again later.'))
        } else {
            res.status(400).json('Invalid Credentials');
        }
    }).catch(err => res.status(400).json('Invalid Credentials'));       
});


// New User Register 
router.post('/register', (req,res) => {
    const { name, email, password } = req.body;

    const hashedValue = bcrypt.hashSync(password);

    db.transaction(trx => {
        trx.insert({
            hash: hashedValue,
            email: email
        }).into('login')
        .returning('email')
        .then(email => {
            return trx('users')
            .returning('*')
            .insert({
                name: name,
                email: email[0],
                joined: new Date()
            }).then(user => {
                res.json(user[0]);
            });
        }).then(trx.commit)
        .catch(trx.rollback);
    }).catch(err => res.status(400).json('Unable to register'));   
});

module.exports = router;