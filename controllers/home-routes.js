const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    try {
        const user = await User.findAll({
            include: [{model: User}]
        });
    } catch (err) {
        res.status(400).json(err);
    }
});