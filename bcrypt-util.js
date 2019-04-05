const bcrypt = require('bcrypt-nodejs');

const hash = value => {
    bcrypt.hash(value, null, null, (err, hash) => {
        if(err){
            console.log(err);
            return;
        }

        return hash;
    });
};

const compare = (value, hash) => {
    bcrypt.compare(value, hash, (err, value) => {
        if(err){
            console.log(err);
            return;
        }
        
        return value;
    });
}

module.exports = {
    hash,
    compare
};