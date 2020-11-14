// this file collects the packaged group of API endpoints 

const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js');

// prefix api endpoints 
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);

// 404 error for request to any endpoint that doesn't exist 
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;