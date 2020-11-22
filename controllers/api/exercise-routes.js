const router = require('express').Router();
const { Exercise, Personal_Exercise, Workout } = require('../../models');
const withAuth = require('../../utils/auth');
const { route } = require('./user-routes');

// ----------------------------------------------------------------------------------------------------
// ----- EXERCISE ROUTES START -----
// ----------------------------------------------------------------------------------------------------

// get exercises
router.get('/', (req, res) => {

    const whereCondition = {};

    if (req.query.gym_no_gym) {
        whereCondition.gym_no_gym = req.query.gym_no_gym;
    }
    if (req.query.upper_lower) {
        whereCondition.upper_lower = req.query.upper_lower;
    }
    if (req.query.fitness_level) {
        whereCondition.fitness_level = req.query.fitness_level;
    }

    Exercise.findAll({
        where: whereCondition
    })
        .then(dbExerciseData => {
            // if the search brings back nothing
            if (!dbExerciseData) {
                // send a 404 status to indicate everything is ok but no data found
                res.status(404).json({ message: 'No exercises found' });
                return;
            }
            // otherwise, send back the data
            res.json(dbExerciseData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
        ;

})

// ----------------------------------------------------------------------------------------------------
// ----- EXERCISE ROUTES END -----
// ----------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------
// ----- PERSONAL_EXERCISE ROUTES START -----
// ----------------------------------------------------------------------------------------------------

// get all of single user's personal exercises
router.get('/personal/:id', (req, res) => {
    Personal_Exercise.findAll(
        {
            where: {
                user_id: req.params.id
            }
        }
    )
        .then(dbExerciseData => res.json(dbExerciseData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
        ;

})

// create a new personal exercise
router.post('/personal', (req, res) => {
    Personal_Exercise.create(
        {
            exercise_name: req.body.exercise_name,
            gym_no_gym: req.body.gym_no_gym,
            upper_lower: req.body.upper_lower,
            fitness_level: req.body.fitness_level,
            instructions: req.body.instructions,
            // user_id: req.body.user_id
            user_id: req.session.user_id
        }
    )
        .then(dbExerciseData => res.json(dbExerciseData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update a personal exercise
router.put('/personal/:id', (req, res) => {
    Personal_Exercise.update(
        {
            exercise_name: req.body.exercise_name,
            gym_no_gym: req.body.gym_no_gym,
            upper_lower: req.body.upper_lower,
            fitness_level: req.body.fitness_level,
            instructions: req.body.instructions
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbExerciseData => {
            if (!dbExerciseData[0]) {
                res.status(404).json({ message: 'No personal exercise found with this id' });
                return;
            }
            res.json(dbExerciseData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
        ;
})

// delete a personal exercise
router.delete('/personal/:id', withAuth, (req, res) => {
    Personal_Exercise.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbExerciseData => {
            if (!dbExerciseData) {
                res.status(404).json({ message: 'No personal exercise found with this id' });
                return;
            }
            // return the resultant
            res.json(dbExerciseData);
            console.log(dbExerciseData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// ----------------------------------------------------------------------------------------------------
// ----- PERSONAL_EXERCISE ROUTES END -----
// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
// ----- WORKOUT ROUTES START -----
// ----------------------------------------------------------------------------------------------------

// get all of a single user's workouts
router.get('/workout/:id', (req, res) => {
 
    Workout.findAll(
        {
            where: {
                user_id:  req.params.id
            }
        }
    )
        .then(dbExerciseData => res.json(dbExerciseData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
        ;

})

// create a new workout
router.post('/workout', (req, res) => {
    Workout.create(
        {
            exercise_list: req.body.exercise_list,
            personal_list: req.body.personal_list,
            // user_id: req.body.user_id
            user_id: req.session.user_id
        }
    )
        .then(dbExerciseData => res.json(dbExerciseData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update a workout
router.put('/workout/:id', (req, res) => {
    Workout.update(
        {
            exercise_list: req.body.exercise_list,
            personal_list: req.body.personal_list
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbExerciseData => {
            if (!dbExerciseData[0]) {
                res.status(404).json({ message: 'No workout found with this id' });
                return;
            }
            res.json(dbExerciseData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
        ;
})

// delete a workout
router.delete('/workout/:id', withAuth, (req, res) => {
    Workout.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbExerciseData => {
            if (!dbExerciseData) {
                res.status(404).json({ message: 'No workout found with this id' });
                return;
            }
            // return the resultant
            res.json(dbExerciseData);
            console.log(dbExerciseData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// ----------------------------------------------------------------------------------------------------
// ----- WORKOUT ROUTES END -----
// ----------------------------------------------------------------------------------------------------

module.exports = router;