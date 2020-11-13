// this file will collect all of the API routes

const router = require('express').Router();

const userRoutes = require('./user-routes');
// const exerciseRoutes = require('./exercise-routes');
// const buddyRoutes = require('./buddy-routes');

router.use('/users', userRoutes);
// router.use('/exercises', exerciseRoutes);
// router.use('/buddies', buddyRoutes);

module.exports = router;