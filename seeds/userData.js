const { User } = require('../models');

const userdata = [
    {
        "username": "Monica",
        "email": "monica2@gmail.com",
        "password": "Password123",
    },
    {
        "username": "Jane",
        "email": "jane2@gmail.com",
        "password": "Password456",
       
    },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;