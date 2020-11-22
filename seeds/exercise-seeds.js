const { Exercise } = require('../models');

const exerciseData = [
    // ----- NO GYM START ---------------------------------------------------------------------------- //

    // --------------- UPPER START ---------------------------------------------------------------------------- //
    {
        exercise_name: 'Push Ups - Kneeling',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'Start with your knees on the floor, your hands just to the sides of your shoulders, and your arms straight.  With your back in a straight line, engage your glutes and core, and lower your body until your chest is nearly touching the floor.  Pause for a moment then push your body up to the starting position.  Complete 3x 10 repetitions.'
    },
    {
        exercise_name: 'Push Ups - Standard',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Start with your feet on the floor, your hands just to the sides of your shoulders, and your arms straight.  With your back in a straight line, engage your glutes and core, and lower your body until your chest is nearly touching the floor.  Pause for a moment then push your body up to the starting position.  Complete 3x 10 repetitions.'
    },
    {
        exercise_name: 'Push Ups - Inverted',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Start with your feet on a flat, raised surface, your hands just to the sides of your shoulders, and your arms straight.  With your back in a straight line, engage your glutes and core, and lower your body until your chest is nearly touching the floor.  Pause for a moment then push your body up to the starting position.  Complete 3x 10 repetitions.'
    },
    {
        exercise_name: 'Dips - Bench',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'Sit down on a chair with your hands next to your thighs.  Walk your feet out just enough to allow you to maintain a sitting position just over the floor.  Lower your body until your arms reach a 90-degree angle, pause a moment, then raise your body back to the starting position.  Complete 3x 10 repetitions.'
    },
    {
        exercise_name: 'Dips - Standard',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Sit down on a chair with your hands next to your thighs.  Walk your feet out until your back makes a straight line.  Lower your body until your arms reach a 90-degree angle, pause a moment, then raise your body back to the starting position.  Complete 3x 10 repetitions.'
    },
    {
        exercise_name: 'Dips - Bench, Weighted',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Sit down on a chair with your hands next to your thighs.  Add weights to your lap.  Walk your feet out just enough to allow you to maintain a sitting position just over the floor.  Lower your body until your arms reach a 90-degree angle, pause a moment, then raise your body back to the starting position.  Complete 3x 10 repetitions.'
    },
    // --------------- UPPER END ---------------------------------------------------------------------------- //

    // --------------- LOWER START ---------------------------------------------------------------------------- //
    {
        exercise_name: 'Squats - Standard',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'beginner',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Squats - Weighted',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'intermediate',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Squats - Jump',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'advanced',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Lunges - Standard',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'beginner',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Lunges - Walking',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'intermediate',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Lunges - Walking, Weighted',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'advanced',
        instructions: 'tbd'
    },
    // --------------- LOWER END ---------------------------------------------------------------------------- //
    
    // ----- NO GYM END ---------------------------------------------------------------------------- //

    
    // ----- GYM START ---------------------------------------------------------------------------- //
    
    // --------------- UPPER START ---------------------------------------------------------------------------- //
    
    {
        exercise_name: 'Bicep Curl',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Bicep Curl',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Bicep Curl',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Tricep Curl',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Tricep Curl',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Tricep Curl',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'tbd'
    },
    // --------------- UPPER END ---------------------------------------------------------------------------- //

    // --------------- LOWER START ---------------------------------------------------------------------------- //
    {
        exercise_name: 'Leg Press',
        gym_no_gym: 'gym',
        upper_lower: 'lower',
        fitness_level: 'beginner',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Leg Press',
        gym_no_gym: 'gym',
        upper_lower: 'lower',
        fitness_level: 'intermediate',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Leg Press',
        gym_no_gym: 'gym',
        upper_lower: 'lower',
        fitness_level: 'advanced',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Leg Extension',
        gym_no_gym: 'gym',
        upper_lower: 'lower',
        fitness_level: 'beginner',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Leg Extension',
        gym_no_gym: 'gym',
        upper_lower: 'lower',
        fitness_level: 'intermediate',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Leg Extension',
        gym_no_gym: 'gym',
        upper_lower: 'lower',
        fitness_level: 'advanced',
        instructions: 'tbd'
    }
    // ----- GYM END ---------------------------------------------------------------------------- //
];

const seedExercises = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercises;