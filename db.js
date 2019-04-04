const bcrypt = require('bcrypt-nodejs');

module.exports = {
    users: [
        {
            id: '1',
            name: 'Admin',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('admin'),
            detection: 0,
            joined: new Date()
        }
    ]
}