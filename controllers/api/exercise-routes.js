const router = require('express').Router();
const { Exercise } = require('../../models');

// ----------------------------------------------------------------------------------------------------
// ----- EXERCISE ROUTES START -----
// ----------------------------------------------------------------------------------------------------

// get all exercises
router.get('/', (req, res) => {
    Exercise.findAll({

    })
        .then(dbExerciseData => res.json(dbExerciseData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
        ;

})

// get gym exercises only
router.get('/:gym', (req, res) => {
    Exercise.findAll({
        where: {
            gym_no_gym: req.params.gym
        }
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

//create a new exercise
router.post('/create-exercise', (req, res) => {
    
})
// ----------------------------------------------------------------------------------------------------
// ----- EXERCISE ROUTES END -----
// ----------------------------------------------------------------------------------------------------

module.exports = router;