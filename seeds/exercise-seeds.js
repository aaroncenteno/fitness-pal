const { Exercise } = require('../models');

const exerciseData = [
    // ----- NO GYM START ---------------------------------------------------------------------------- //

    // --------------- UPPER START ---------------------------------------------------------------------------- //
    {
        exercise_name: 'Push Ups - Kneeling',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'Start with your knees on the floor, your hands just to the sides of your shoulders, and your arms straight.<br><br>With your back in a straight line, engage your glutes and core, and lower your body until your chest is nearly touching the floor.  Pause for a moment then push your body up to the starting position.  Complete 3x 10 repetitions.'
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
        exercise_name: 'Squats - Quarter',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'beginner',
        instructions: 'With your feet shoulder-width apart and your chest proud, bend your knees to lower yourself until your thighs are 45-degrees to the floor.  Pause, then raise yourself back to a standing position.'
    },
    {
        exercise_name: 'Squats - Standard',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'intermediate',
        instructions: 'With your feet shoulder-width apart and your chest proud, bend your knees to lower yourself until your thighs are parallel to the floor.  Pause, then raise yourself back to a standing position.'
    },
    {
        exercise_name: 'Squats - Jump',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'advanced',
        instructions: 'Perform a standard squat.  Once your thighs reach parallel to the ground, push your heels into the floor and jump as high as you can.  Repeat the motion.'
    },
    {
        exercise_name: 'Lunges - Standard',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'beginner',
        instructions: 'Stand with your feet hip-width apart.  Take a large step forward with your right leg then lower your body until your right thigh is parallel to the floor.  Push into your right heel to raise yourself back to the standing position.'
    },
    {
        exercise_name: 'Lunges - Walking',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'intermediate',
        instructions: 'Stand with your feet hip-width apart.  Take a large step forward with your right leg then lower your body until your right thigh is parallel to the floor.  Push into your right heel to lunge yourself forward onto your left foot, then lower your body again until your left thigh is parallel to the floor.  Repeat the motion.'
    },
    {
        exercise_name: 'Lunges - Jump',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'advanced',
        instructions: 'Starting at the lowered position of a standard lunge, engage your core then drive both feet into the floor to jump into the air and switch positions.  Land softly on your feet and continue down to the lowered lunge position.  Repeat the motion.'
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
        instructions: 'Hold a dumbbell in each hand with your arms close to your torso and your palms facing forward.  Curl the weights up to your shoulder as you maintain your elbow position.  Pause briefly then lower the weights back to the starting position.  Complete 3 sets of 10 repeitions.'
    },
    {
        exercise_name: 'Bicep Curl',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Hold a dumbbell in each hand with your arms close to your torso and your palms facing forward.  Curl the weights up to your shoulder as you maintain your elbow position.  Pause briefly then lower the weights back to the starting position.  Complete 4 sets of 10 repeitions.'
    },
    {
        exercise_name: 'Bicep Curl',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Hold a dumbbell in each hand with your arms close to your torso and your palms facing forward.  Curl the weights up to your shoulder as you maintain your elbow position.  Pause briefly then lower the weights back to the starting position.  Complete 5 sets of 10 repeitions.'
    },
    {
        exercise_name: 'Tricep Curl',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'Hold a dumbbell with both hands with your feet shoulder-width apart.  Lift the dumbbell until your arms are extended with your elbows facing forward.  Bend your elbows and lower the dumbbell behind your head.  Pause briefly then raise the dumbbell back to the starting position.  Complete 3 sets of 10 repeitions.'
    },
    {
        exercise_name: 'Tricep Curl',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Hold a dumbbell with both hands with your feet shoulder-width apart.  Lift the dumbbell until your arms are extended with your elbows facing forward.  Bend your elbows and lower the dumbbell behind your head.  Pause briefly then raise the dumbbell back to the starting position.  Complete 4 sets of 10 repeitions.'
    },
    {
        exercise_name: 'Tricep Curl',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Hold a dumbbell with both hands with your feet shoulder-width apart.  Lift the dumbbell until your arms are extended with your elbows facing forward.  Bend your elbows and lower the dumbbell behind your head.  Pause briefly then raise the dumbbell back to the starting position.  Complete 5 sets of 10 repeitions.'
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