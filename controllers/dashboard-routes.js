const router = require('express').Router();

// route to dashboard
router.get('/', (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn 
    });
});

// display edit-profile form
router.get('/profile', (req, res) => {
    // check for a session and redirect to the homepage if one exists
    if (req.session.loggedIn) {
        res.render('edit-user-profile', {
            loggedIn: req.session.loggedIn
        });
        return;
    }
    res.render('login');
});

module.exports = router;