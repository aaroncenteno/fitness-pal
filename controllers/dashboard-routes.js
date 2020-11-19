const router = require('express').Router();
const { Profile, User, Personal_Exercise, Workout } = require('../models')

// route to dashboard
router.get('/', (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn
    });
});

// display edit-profile form and data
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
            if (!dbProfileData) {
                res.status(404).json({ message: 'No profile found with this id!' });
                return;
            }

            const profile = dbProfileData.get({ plain: true });
            profile.advanced = (profile.fitness_level === 'Advanced') ? 'checked' : null
            profile.beginner = (profile.fitness_level === 'Beginner') ? 'checked' : null
            profile.intermediate = (profile.fitness_level === 'Intermediate') ? 'checked' : null

            const temp = profile.goal.split(",")

            profile.improveStrength = (temp.includes('Improve Strength')) ? 'checked' : 'unchecked'
            profile.loseWeight = (temp.includes('Lose Weight')) ? 'checked' : 'unchecked'
            profile.consistency = (temp.includes('Consistency')) ? 'checked' : 'unchecked'
            profile.getInShape = (temp.includes('Get In Shape')) ? 'checked' : 'unchecked'
            profile.feelHealthier = (temp.includes('Feel Healthier')) ? 'checked' : 'unchecked'


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

// display personal exercise form and data for edit
router.get('/edit-personal/:id', (req, res) => {

    Personal_Exercise.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'exercise_name',
            'gym_no_gym',
            'upper_lower',
            'fitness_level',
            'instructions'
        ]
    })
        .then(dbExerciseData => {
            if (!dbExerciseData) {
                res.status(404).json({ message: 'No personal exercise found with this id' });
                return;
            }

            // serialize the data
            const personal_exercise = dbExerciseData.get({ plain: true });

            // pass data to template
            // pass a session variable to the template
            res.render('edit-exercise', { personal_exercise, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// display workout form and data for edit
router.get('/edit-workout/:id', (req, res) => {

    Workout.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'exercise_list',
            'personal_list'
        ]
    })
        .then(dbExerciseData => {
            if (!dbExerciseData) {
                res.status(404).json({ message: 'No workout found with this id' });
                return;
            }

            // serialize the data
            const workout = dbExerciseData.get({ plain: true });

            // pass data to template
            // pass a session variable to the template
            res.render('edit-workout', { workout, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;