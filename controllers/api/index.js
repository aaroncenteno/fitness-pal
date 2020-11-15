// this file will collect all of the API routes

const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const exerciseRoutes = require('./exercise-routes.js');

router.use('/users', userRoutes);
router.use('/exercises', exerciseRoutes);

module.exports = router;