const router = require('express').Router();
const { Exercise } = require('../../models');

// ----------------------------------------------------------------------------------------------------
// ----- EXERCISE ROUTES START -----
// ----------------------------------------------------------------------------------------------------

// get all exercises
router.get('/', (req, res) => {
    Exercise.findAll({

    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
        ;

})

// get gym exercises only
// router.get('/gym', (req, res) => {
//     Exercise.findOne({
//         where: {
//             gym_no_gym: req.params.gym
//         }
//     })
// })

// ----------------------------------------------------------------------------------------------------
// ----- EXERCISE ROUTES END -----
// ----------------------------------------------------------------------------------------------------

module.exports = router;