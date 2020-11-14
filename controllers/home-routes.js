const router = require('express').Router();

// route to home
router.get('/', (req, res) => {
    res.render('homepage');
});

// route to display log-in
router.get('/login', (req, res) => {
    // check for a session and redirect to the homepage if one exists
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// route to display sign-up
router.get('/signup', (req, res) => {
    // check for a session and redirect to the log-in if one exists
    if (req.session.loggedIn) {
        res.redirect('/login');
        return;
    }
    res.render('signup');
});

module.exports = router;