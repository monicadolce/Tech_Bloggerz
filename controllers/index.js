const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);

// const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes.js');

// router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

module.exports = router;