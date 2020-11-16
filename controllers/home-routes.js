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
    res.render('signup');
});

// route to display create-profile page
router.get('/profile', (req, res) => {
    res.render('create-user-profile');
});

module.exports = router;