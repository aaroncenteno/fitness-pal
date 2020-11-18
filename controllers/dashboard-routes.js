const router = require('express').Router();
const {Profile, User} = require('../models')

// route to dashboard
router.get('/', (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn 
    });
});

// display edit-profile form
router.get('/profile/:id', (req, res) => {
    Profile.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'height_ft',
            'height_in',
            'weight',
            'fitness_level',
            'goal'
        ],
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            }
        ]
    })
    .then(dbProfileData => {
        if(!dbProfileData) {
            res.status(404).json({ message: 'No profile found with this id!'});
            return;
        }

        const profile = dbProfileData.get({ plain: true});
        profile.advanced = (profile.fitness_level === 'Advanced')?'checked':null
        profile.beginner = (profile.fitness_level === 'Beginner')?'checked':null
        profile.intermediate = (profile.fitness_level === 'Intermediate')?'checked':null

        const temp = profile.goal.split(",")

        profile.improveStrength = (temp.includes('Improve Strength'))?'checked':'unchecked'
        profile.loseWeight = (temp.includes('Lose Weight'))?'checked':'unchecked'
        profile.consistency = (temp.includes('Consistency'))?'checked':'unchecked'
        profile.getInShape = (temp.includes('Get In Shape'))?'checked':'unchecked'
        profile.feelHealthier = (temp.includes('Feel Healthier'))?'checked':'unchecked'


        res.render('edit-user-profile', {
            profile,
            loggedIn: true
        });
    })
    .catch(err => {
        res.status(500).json(err);
    });
    // check for a session and redirect to the homepage if one exists
    // if (req.session.loggedIn) {
    //     res.render('edit-user-profile', {
    //         profile,
    //         loggedIn: req.session.loggedIn
    //     });
    //     return;
    // }
    // res.render('login');
});

module.exports = router;