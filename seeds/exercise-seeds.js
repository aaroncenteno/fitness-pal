const { Exercise } = require('../models');

const exerciseData = [
    // ----- NO GYM START ---------------------------------------------------------------------------- //

    // --------------- UPPER START ---------------------------------------------------------------------------- //
    {
        exercise_name: 'Push Ups - Kneeling',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Push Ups - Standard',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Push Ups - Inverted',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Dips - Bench',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Dips - Standard',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'tbd'
    },
    {
        exercise_name: 'Dips - Bench, Weighted',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'tbd'
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