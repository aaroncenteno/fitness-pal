const router = require('express').Router();
const { Profile, User, Personal_Exercise, Workout, Buddy } = require('../models')

// route to dashboard
router.get('/', (req, res) => {
    User.findOne({
        where: {
            id: req.session.user_id
        },
        // exclude password column for security
        attributes: { exclude: ['password'] },
        include: [
            // include Buddy model 
            {
                model: User,
                attributes: [
                    ['id', 'buddy_id'],
                    ['username', 'buddy_name']
                ],
                through: Buddy,
                as: 'buddies'
            },
            {
                model: Profile,
                attributes: ['id', 'height_ft', 'height_in', 'weight', 'fitness_level', 'goal', 'user_id']
                // attributes: ['id', 'height_ft', 'height_in', 'weight', 'fitness_level', 'user_id']

            },
            {
                model: Personal_Exercise,
                attributes: ['id', 'exercise_name', 'gym_no_gym', 'upper_lower', 'fitness_level', 'instructions']
            },
            {
                model: Workout,
                attributes: ['id', 'exercise_list', 'personal_list']
            }
        ]
    })
        .then(dbUserData => {
            const friends = dbUserData.get({plain: true});
            const username = req.session.username;
            const profile_id = dbUserData.profile.id; 
            const joinDate = dbUserData.createdAt;
            const goals = dbUserData.profile.goal.split(",");
            const workouts = dbUserData.workouts
            const personalExercises = dbUserData.personal_exercises
            const id = req.session.user_id
  
            res.render('dashboard', {
                loggedIn: true,
                username,
                profile_id,
                joinDate,
                goals,
                friends,
                workouts,
                personalExercises,
                id
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



router.get('/generateworkout', (req, res) => {
     res.render("generate-workout")    
})

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

            const user_id = dbProfileData.user_id;
            res.render('edit-user-profile', {
                profile,
                user_id,
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

// Create exercise page
router.get('/create-personal-exercise', (req, res) => {
    if(req.session.loggedIn) {
        res.render('create-exercise', {
            loggedIn: true
        });
        return;
    }
    res.redirect('/');
})

// display daily workout
router.get('/workout', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dailyworkout', {
            loggedIn: req.session.loggedIn
        });
        return;
    }
    res.redirect('/');
});

// display exercise search
// router.get('/exercise-search', (req, res) => {
//     if (req.session.loggedIn) {
//         res.render('exercise-search', {
//             loggedIn: req.session.loggedIn
//         });
//         return;
//     }
//     res.redirect('/');
// });

// display exercise search results
// router.get('/exercise-search/results', (req, res) => {
//     if (req.session.loggedIn) {
//         res.render('exercise-search-results', {
//             loggedIn: req.session.loggedIn
//         });
//         return;
//     }
//     res.redirect('/');
// });

// display personal exercises page
router.get('/personal-exercise', (req, res) => {
    User.findOne({
        where: {
            id: req.session.user_id
        },
        attributes: {exclude: ['password']},
        include: [
                    {
                        model: Personal_Exercise,
                        attributes: ['id', 'exercise_name', 'gym_no_gym', 'upper_lower', 'fitness_level', 'instructions']
                    }
                ]
    })
    .then(dbUserData => {
        const results = dbUserData.get({plain: true});
        const personal_exercises = results.personal_exercises
        console.log(personal_exercises)
        if (req.session.loggedIn) {
            res.render('personal-exercise', {
                loggedIn: req.session.loggedIn,
                personal_exercises
            });
            return;
        }
        res.redirect('/');
    })
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