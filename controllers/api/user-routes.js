const router = require('express').Router();
const { User, Buddy, Profile, Personal_Exercise, Workout } = require('../../models');

const withAuth = require('../../utils/auth');

// ----------------------------------------------------------------------------------------------------
// ----- USER ROUTES START -----
// ----------------------------------------------------------------------------------------------------

// get all users
router.get('/', (req, res) => {
    User.findAll({
        // exclude the password column for security
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
        ;
});

// get one user, their profile, and their buddies
router.get('/:usersearch', (req, res) => {
    User.findOne({
        where: {
            username: req.params.usersearch
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
            // if the search brings back nothing
            if (!dbUserData) {
                // send a 404 status to indicate everything is ok but no data found
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            // otherwise, send back the data
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create a new user
router.post('/', (req, res) => {
    // pulls user data that is input into the sign-up form
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => {
            // initiate the creation of the session before we send the response back
            req.session.save(() => {
                // give server access to user's user_id, username, and a boolean of whether user is logged in
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json(dbUserData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
        ;
});

// log-in with user-input data
router.post('/login', (req, res) => {
    // expects {username: '', password: ''}
    // query for a single user
    User.findOne({
        // query by username entered and assign to req.body.username
        where: {
            username: req.body.username
        }
    }).then(dbUserData => {
        console.log(dbUserData);
        // if username is not found
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email!' });
            return;
        }

        // if username is found, verify the user's identity by matching the password
        const validPassword = dbUserData.checkPassword(req.body.password);

        // if password does not match, send back error message and exit 
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        // initiate the creation of the session before we send the response back
        req.session.save(() => {
            // declare session variables
            // give server access to user's user_id, username, and a boolean of whether user is logged in
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            // if there is a match, send message of log in
            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });
});

// update a user's information
router.put('/:id', withAuth, (req, res) => {
    // expects {username: '', email: '', password: ''}

    // we pass in req.body to provide new data we want to use in the update
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
        ;
});

// get a user's buddy list
router.get('/:id/buddy', (req, res) => {
    Buddy.findOne({
        where: {
            user_id: req.params.id
        }

    })
    .then(dbBuddyData => {
        if (!dbBuddyData) {
            res.status(404).json({ message: 'No buddy list found with this id' });
            return;
        }
        res.json(dbBuddyData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// add a buddy to a user's buddy list
router.post('/buddy/:id', withAuth, (req, res) => {

    Buddy.create( 
        {
            buddy_id: req.params.id,
            // user_id: req.body.user_id
            user_id: req.session.user_id
        }
    )
    .then(dbBuddyData => res.json(dbBuddyData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete a buddy
router.delete('/:id', withAuth, (req, res) => {
    Buddy.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbBuddyData => {
            if (!dbBuddyData) {
                res.status(404).json({ message: 'No buddy found with this id' });
                return;
            }
            res.json(dbBuddyData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete a user
router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// log out route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            // send back 204 status after the session has successfully been destroyed
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

// ----------------------------------------------------------------------------------------------------
// ----- USER ROUTES END -----
// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
// ----- USER PROFILE ROUTES START -----
// ----------------------------------------------------------------------------------------------------

// weird bug with get all profiles.  will figure it out later.
// get all profiles
// router.get('/profile', (req, res) => {
//     Profile.findAll({
//     })
//         .then(dbProfileData => res.json(dbProfileData))
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// })

// get single profile
router.get('/profile/:id', (req, res) => {
    Profile.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbProfileData => {
            // if the search brings back nothing
            if (!dbProfileData) {
                // send a 404 status to indicate everything is ok but no data found
                res.status(404).json({ message: 'No profile found with this id' });
                return;
            }
            // otherwise, send back the data
            res.json(dbProfileData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
        ;
})

// create a user's profile
router.post('/profile', withAuth, (req, res) => {
    Profile.create(
        {
            height_ft: req.body.height_ft,
            height_in: req.body.height_in,
            weight: req.body.weight,
            fitness_level: req.body.fitness_level,
            goal: req.body.goal,
            // goal_consistency: req.body.goal_consistency,
            // goal_getinshape: req.body.goal_getinshape,
            // goal_health: req.body.goal_health,
            // goal_strength: req.body.goal_strength,
            // goal_weightloss: req.body.goal_weightloss,
            // user_id: req.body.user_id
            user_id: req.session.user_id
        })
        .then(dbProfileData => res.json(dbProfileData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

})

// update a user's profile
router.put('/profile/:id', withAuth, (req, res) => {
    // we pass in req.body to provide new data we want to use in the update
    Profile.update(
        {
            height_ft: req.body.height_ft,
            height_in: req.body.height_in,
            weight: req.body.weight,
            fitness_level: req.body.fitness_level,
            goal: req.body.goal
            // goal_consistency: req.body.goal_consistency,
            // goal_getinshape: req.body.goal_getinshape,
            // goal_health: req.body.goal_health,
            // goal_strength: req.body.goal_strength,
            // goal_weightloss: req.body.goal_weightloss
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbProfileData => {
            if (!dbProfileData[0]) {
                res.status(404).json({ message: 'No profile found with this id' });
                return;
            }
            res.json(dbProfileData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
        ;
});

// ----------------------------------------------------------------------------------------------------
// ----- USER PROFILE ROUTES END -----
// ----------------------------------------------------------------------------------------------------

module.exports = router;