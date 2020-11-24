const router = require('express').Router();
const withAuth = require('../utils/auth');

// route to home
router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
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
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

// route to display create-profile page
router.get('/profile', (req, res) => {
    res.render('create-user-profile', {
        loggedIn: req.session.loggedIn
    });
});

// display exercise search
router.get('/exercise-search', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        res.render('exercise-search', {
            loggedIn: req.session.loggedIn
        });
        return;
    }
    res.redirect('/');
});

// display exercise search results
router.get('/exercise-search/results', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        res.render('exercise-search-results', {
            loggedIn: req.session.loggedIn
        });
        return;
    }
    res.redirect('/');
});

module.exports = router;