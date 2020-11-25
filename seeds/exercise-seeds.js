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
    {
        exercise_name: 'Spider-Man Mountain Climbers',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'Start in a high plank, back completely straight. Drive your knee out and toward your tricep, turn your head to watch your knee. Alternate knees keeping your torso in place. Repeat 3 sets of 12 reps (per leg).'
    },
    {
        exercise_name: 'Spider-Man Mountain Climbers',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Start in a high plank, back completely straight. Drive your knee out and toward your tricep, turn your head to watch your knee. Alternate knees keeping your torso in place. Repeat 4 sets of 15 reps (per leg).'
    },
    {
        exercise_name: 'Spider-Man Mountain Climbers',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Start in a high plank, back completely straight. Drive your knee out and toward your tricep, turn your head to watch your knee. Alternate knees keeping your torso in place. Repeat 5 sets of 18 reps (per leg).'
    },
    {
        exercise_name: 'Standing Oblique Crunches',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'Stand with feet hip width apart and hands placed behind your head, elbows wide. Lift one knee toward your elbow on the same side, bend your torso up and over the knee. Repeat 3 sets of 12 reps(per side).'
    },
    {
        exercise_name: 'Standing Oblique Crunches',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Stand with feet hip width apart and hands placed behind your head, elbows wide. Lift one knee toward your elbow on the same side, bend your torso up and over the knee. Repeat 4 sets of 15 reps(per side).'
    },
    {
        exercise_name: 'Standing Oblique Crunches',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Stand with feet hip width apart and hands placed behind your head, elbows wide. Lift one knee toward your elbow on the same side, bend your torso up and over the knee. Repeat 5 sets of 18 reps(per side).'
    },
    {
        exercise_name: 'Plank Ups',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'MODIFIED: Place weight on knees if necessary. Start in a high plank, bend one arm to bring elbow and forearm to the floor, then bring the other arm down. Push back up to the start position and repeat the pattern. 3 sets of 12 reps.'
    },
    {
        exercise_name: 'Plank Ups',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Start in a high plank, bend one arm to bring elbow and forearm to the floor, then bring the other arm down. Push back up to the start position and repeat the pattern. 4 sets of 14 reps.'
    },
    {
        exercise_name: 'Plank Ups',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Start in a high plank, bend one arm to bring elbow and forearm to the floor, then bring the other arm down. Push back up to the start position and repeat the pattern. 5 sets of 16 reps.'
    },
    {
        exercise_name: 'Bicycle Crunches',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'Sit on the floor with your knees bent and feet lifted and hands behind your head. Keep your chest up and back straight as you lean back to engage the core. Twist to bring your right elbow to your left knee, straightening the right leg. Alternate sides. Repeate 3 sets of 12 reps (per side).'
    },
    {
        exercise_name: 'Bicycle Crunches',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Sit on the floor with your knees bent and feet lifted and hands behind your head. Keep your chest up and back straight as you lean back to engage the core. Twist to bring your right elbow to your left knee, straightening the right leg. Alternate sides. Repeate 4 sets of 15 reps (per side).'
    },
    {
        exercise_name: 'Bicycle Crunches',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Sit on the floor with your knees bent and feet lifted and hands behind your head. Keep your chest up and back straight as you lean back to engage the core. Twist to bring your right elbow to your left knee, straightening the right leg. Alternate sides. Repeate 5 sets of 18 reps (per side).'
    },
    {
        exercise_name: 'Plank Taps',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'MODIFIED: Place weight on knees if necessary. Start in a high plank with your feet hip width apart. Tap each hand to the opposite shoulder while engaging the core to keep the hips still as possible. Repeat 3 sets  of 12 reps (per side).'
    },
    {
        exercise_name: 'Plank Taps',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Place weight on knees if necessary. Start in a high plank with your feet hip width apart. Tap each hand to the opposite shoulder while engaging the core to keep the hips still as possible. Repeat 4 sets  of 15 reps (per side).'
    },
    {
        exercise_name: 'Plank Taps',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Place weight on knees if necessary. Start in a high plank with your feet hip width apart. Tap each hand to the opposite shoulder while engaging the core to keep the hips still as possible. Repeat 5 sets  of 18 reps (per side).'
    },
    {
        exercise_name: 'Sit Up Twists',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'Lie on your back with your knees bent and feet flat. Place hands behind head and engage the core to do a sit up. At the top of the sit up, bring your right elbow to your left knee and twist your body. Lower back down to start position. Repeate 3 sets of 12 reps.'
    },
    {
        exercise_name: 'Sit Up Twists',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Lie on your back with your knees bent and feet flat. Place hands behind head and engage the core to do a sit up. At the top of the sit up, bring your right elbow to your left knee and twist your body. Lower back down to start position. Repeate 4 sets of 15 reps.'
    },
    {
        exercise_name: 'Sit Up Twists',
        gym_no_gym: 'no_gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Lie on your back with your knees bent and feet flat. Place hands behind head and engage the core to do a sit up. At the top of the sit up, bring your right elbow to your left knee and twist your body. Lower back down to start position. Repeate 5 sets of 18 reps.'
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
    {
        exercise_name: 'Side Lunges',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'beginner',
        instructions: 'Stand with your feet hip width apart, take a big step to the right, beding your knee and push your glutes back. Keep the chest lifted and core engaged. Repeat 3 sets of 12 reps (per leg).'
    },
    {
        exercise_name: 'Side Lunges',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'intermediate',
        instructions: 'Stand with your feet hip width apart, take a big step to the right, beding your knee and push your glutes back. Keep the chest lifted and core engaged. Repeat 4 sets of 15 reps (per leg).'
    },
    {
        exercise_name: 'Side Lunges',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'advanced',
        instructions: 'Stand with your feet hip width apart, take a big step to the right, beding your knee and push your glutes back. Keep the chest lifted and core engaged. Repeat 5 sets of 18 reps (per leg).'
    },
    {
        exercise_name: 'Reverse Lungues',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'beginner',
        instructions: 'Stand with your feet shoulder width apart. Step backwards and place pressure on the balls of your feet. Legs should at approximately 90 degrees. Place pressure in your heel and return to standing repeat on other leg. 3 sets of 12 reps(per leg)',
    },
    {
        exercise_name: 'Reverse Lungues',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'intermediate',
        instructions: 'Stand with your feet shoulder width apart. Step backwards and place pressure on the balls of your feet. Legs should at approximately 90 degrees. Place pressure in your heel and return to standing repeat on other leg. 4 sets of 14 reps(per leg)',
    },
    {
        exercise_name: 'Reverse Lungues',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'advanced',
        instructions: 'If you have a backpack place some books or heavy items in it and push your limits! Stand with your feet shoulder width apart. Step backwards and place pressure on the balls of your feet. Legs should at approximately 90 degrees. Place pressure in your heel and return to standing repeat on other leg. 5 sets of 18 reps(per leg)',
    },
    {
        exercise_name: 'Lateral Leg Raises',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower' ,
        fitness_level: 'beginner',
        instructions: 'Lay on your side, legs extended. Lift the top leg 45 degrees and then lower it it slowly. Alter the point of your toes forward and then toward the ceiling. Repeat 3 sets of 12 reps (per leg)',
    },
    {
        exercise_name: 'Lateral Leg Raises',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower' ,
        fitness_level: 'intermediate',
        instructions: 'Lay on your side, legs extended. Lift the top leg 45 degrees and then lower it it slowly. Alter the point of your toes forward and then toward the ceiling. Repeat 4 sets of 15 reps (per leg)',
    },
    {
        exercise_name: 'Lateral Leg Raises',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower' ,
        fitness_level: 'advanced',
        instructions: 'If you have exercise bands use them and push your limits! Lay on your side, legs extended. Lift the top leg 45 degrees and then lower it it slowly. Alter the point of your toes forward and then toward the ceiling. Repeat 5 sets of 18 reps (per leg)',
    },
    {
        exercise_name: 'Glute Bridge',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'beginner',
        instructions: 'Laying on your back, place your feet at a distance where your legs form a 45 degree angle. Putting pressure in your heels, lift your upper body till only your shoulder blades touch the ground. Engage the glutes. Return to lower position. Repeat 3 sets of 12 reps.'
    },
    {
        exercise_name: 'Glute Bridge',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'intermediate',
        instructions: 'Laying on your back, place your feet at a distance where your legs form a 45 degree angle. Putting pressure in your heels, lift your upper body till only your shoulder blades touch the ground. Engage the glutes. Return to lower position. Repeat 4 sets of 15 reps.'
    },
    {
        exercise_name: 'Glute Bridge',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'advanced',
        instructions: 'OPTIONAL: Utilize heavy items(i.e. Books, dumbbells and etc.) place them on your midsection. Laying on your back, place your feet at a distance where your legs form a 45 degree angle. Putting pressure in your heels, lift your upper body till only your shoulder blades touch the ground. Engage the glutes. Return to lower position. Repeat 5 sets of 18 reps.'
    },
    {
        exercise_name: 'Single Leg Glute Bridge',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'beginner',
        instructions:  'Laying on your back, place your feet at a distance where your legs form a 45 degree angle. Lift one leg up, then putting pressure in your lowered legs heel, lift your upper body till only your shoulder blades touch the ground. Engage the glutes. Return to lower position. Repeat 3 sets of 12 reps(per leg).'
    },
    {
        exercise_name: 'Single Leg Glute Bridge',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'intermediate',
        instructions:  'Laying on your back, place your feet at a distance where your legs form a 45 degree angle. Lift one leg up, then putting pressure in your lowered legs heel, lift your upper body till only your shoulder blades touch the ground. Engage the glutes. Return to lower position. Repeat 4 sets of 15 reps(per leg).'
    },
    {
        exercise_name: 'Single Leg Glute Bridge',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'advanced',
        instructions:  'Laying on your back, place your feet at a distance where your legs form a 45 degree angle. Lift one leg up, then putting pressure in your lowered legs heel, lift your upper body till only your shoulder blades touch the ground. Engage the glutes. Return to lower position. Repeat 5 sets of 18 reps(per leg).'
    },
    {
        exercise_name: 'Donkey Kicks',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'beginner',
        instructions: 'Start on all fours. Kick your right leg back, keeping the bottom of your foot toward the sky, till your glute is completely flexed.Repeate 3 sets of 12 reps(per leg)'
    },
    {
        exercise_name: 'Donkey Kicks',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'intermediate',
        instructions: 'Start on all fours. Kick your right leg back, keeping the bottom of your foot toward the sky, till your glute is completely flexed.Repeate 4 sets of 15 reps(per leg)'
    },
    {
        exercise_name: 'Donkey Kicks',
        gym_no_gym: 'no_gym',
        upper_lower: 'lower',
        fitness_level: 'advanced',
        instructions: 'Start on all fours. Kick your right leg back, keeping the bottom of your foot toward the sky, till your glute is completely flexed.Repeate 5 sets of 18 reps(per leg)'
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
    {
        exercise_name: 'Shoulder Press',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'Using a light dumbbell (5-12.5 lbs), place shoulders wide with dumbbells in hand. Shoulders at a 90 degree angle. Push dumbbells up toward the sky and lower to start position. Repeat 3 sets of 12 reps.'
    },
    {
        exercise_name: 'Shoulder Press',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Using a medium weight dumbbell (15 - 22.5 lbs), place shoulders wide with dumbbells in hand. Shoulders at a 90 degree angle. Push dumbbells up toward the sky and lower to start position. Repeat 4 sets of 15 reps.'
    },
    {
        exercise_name: 'Shoulder Press',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Using a heavy weight dumbbell (30 - heavier lbs), place shoulders wide with dumbbells in hand. Shoulders at a 90 degree angle. Push dumbbells up toward the sky and lower to start position. Repeat 5 sets of 15 reps.'
    },
    {
        exercise_name: 'Dumbbell Flys',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'Using a light weight dumbbell (5-12.5 lbs). Lay flat on a bench and place dumbells directly above chest, arms straight. Lower arms to the side with a slight bend of the elbow at approximately 135 degree angle, return to start position. Repeat 3 sets of 12 reps.'
    },
    {
        exercise_name: 'Dumbbell Flys',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Using a medium weight dumbbell (15-20 lbs). Lay flat on a bench and place dumbells directly above chest, arms straight. Lower arms to the side with a slight bend of the elbow at approximately 135 degree angle, return to start position. Repeat 4 sets of 12 reps.'
    },
    {
        exercise_name: 'Dumbbell Flys',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Using a heavy weight dumbbell (20 - Heavier lbs). Lay flat on a bench and place dumbells directly above chest, arms straight. Lower arms to the side with a slight bend of the elbow at approximately 135 degree angle, return to start position. Repeat 5 sets of 12 reps.'
    },
    {
        exercise_name: 'Bench Press',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'Using only bar weight(45lbs) Lay flat on a bench press, grab bar with hands shoulder width apart. Lower bar to chest and press back to start position. Repeat 3 sets of 10 reps.'
    },
    {
        exercise_name: 'Bench Press',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Using only medium plates(10-25lbs) + bar weight (45lbs) Lay flat on a bench press, grab bar with hands shoulder width apart. Lower bar to chest and press back to start position. Repeat 4 sets of 10 reps.'
    },
    {
        exercise_name: 'Bench Press',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Using comfortable weight + bar weight (45lbs) Lay flat on a bench press, grab bar with hands shoulder width apart. Lower bar to chest and press back to start position. Repeat 5 sets of 12 reps.'
    },
    {
        exercise_name: 'Hammer Head Curls',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'Using light weight dumbbells (5 - 12.5 lbs) hold dumbbells vertically and raise up toward shoulder. 3 sets of 10 reps per side.'
    },
    {
        exercise_name: 'Hammer Head Curls',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Using medium weight dumbbells (12.5 - 20 lbs) hold dumbbells vertically and raise up toward shoulder. 4 sets of 10 reps per side.'
    },
    {
        exercise_name: 'Hammer Head Curls',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Using comfortable weight dumbbells, hold dumbbells vertically and raise up toward shoulder. 5 sets of 12 reps per side.'
    },
    {
        exercise_name: 'Back Flys',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'With a light weight dumbbells (5-12.5 lbs) in each hand, position upper body at a 90 degree angle. Lift dumbbells to the sides, engaging the back muscles. Repeat 3 sets of 12 reps.'
    },
    {
        exercise_name: 'Back Flys',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'With a medium weight dumbbells (12.5 - 17.5 lbs) in each hand, position upper body at a 90 degree angle. Lift dumbbells to the sides, engaging the back muscles. Repeat 4 sets of 12 reps.'
    },
    {
        exercise_name: 'Back Flys',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'With a comfortable weight dumbbells in each hand, position upper body at a 90 degree angle. Lift dumbbells to the sides, engaging the back muscles. Repeat 5 sets of 12 reps.'
    },
    {
        exercise_name: 'Dumbbell Rows',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'beginner',
        instructions: 'Using a dumbell and bench, place one knee on the bench and other leg standing straight. Torso is at a 70 degree angle. Pull the dumbell till it is parallel to your chest. Return to start position. Repeat 3 sets of 10 reps (per side).'
    },
    {
        exercise_name: 'Dumbbell Rows',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'intermediate',
        instructions: 'Using a dumbell and bench, place one knee on the bench and other leg standing straight. Torso is at a 70 degree angle. Pull the dumbell till it is parallel to your chest. Return to start position. Repeat 4 sets of 10 reps (per side).'
    },
    {
        exercise_name: 'Dumbbell Rows',
        gym_no_gym: 'gym',
        upper_lower: 'upper',
        fitness_level: 'advanced',
        instructions: 'Using a dumbell and bench, place one knee on the bench and other leg standing straight. Torso is at a 70 degree angle. Pull the dumbell till it is parallel to your chest. Return to start position. Repeat 5 sets of 10 reps (per side).'
    },

    // --------------- UPPER END ---------------------------------------------------------------------------- //

    // --------------- LOWER START ---------------------------------------------------------------------------- //
    {
        exercise_name: 'Leg Press',
        gym_no_gym: 'gym',
        upper_lower: 'lower',
        fitness_level: 'beginner',
        instructions: 'Position your body on a leg press machine with your back and head against the padded support.  Please your feet on the foot plate with your feet hip-width apart and your legs at a 90-degree angle.  Push the platform away with your heels, pause, then slowly return the footplate to the starting position.  Complete 3 sets of 10 repeitions.'
    },
    {
        exercise_name: 'Leg Press',
        gym_no_gym: 'gym',
        upper_lower: 'lower',
        fitness_level: 'intermediate',
        instructions: 'Position your body on a leg press machine with your back and head against the padded support.  Please your feet on the foot plate with your feet hip-width apart and your legs at a 90-degree angle.  Push the platform away with your heels, pause, then slowly return the footplate to the starting position.  Complete 4 sets of 10 repeitions.'
    },
    {
        exercise_name: 'Leg Press',
        gym_no_gym: 'gym',
        upper_lower: 'lower',
        fitness_level: 'advanced',
        instructions: 'Position your body on a leg press machine with your back and head against the padded support.  Please your feet on the foot plate with your feet hip-width apart and your legs at a 90-degree angle.  Push the platform away with your heels, pause, then slowly return the footplate to the starting position.  Complete 5 sets of 10 repeitions.'
    },
    {
        exercise_name: 'Leg Extension',
        gym_no_gym: 'gym',
        upper_lower: 'lower',
        fitness_level: 'beginner',
        instructions: 'Position your body on a leg extension machine with the pad just above your ankles.  Lift the weight until your legs are almost straight, pause, then lower the weight back to the starting position.  Complete 3 sets of 10 repeitions.'
    },
    {
        exercise_name: 'Leg Extension',
        gym_no_gym: 'gym',
        upper_lower: 'lower',
        fitness_level: 'intermediate',
        instructions: 'Position your body on a leg extension machine with the pad just above your ankles.  Lift the weight until your legs are almost straight, pause, then lower the weight back to the starting position.  Complete 4 sets of 10 repeitions.'
    },
    {
        exercise_name: 'Leg Extension',
        gym_no_gym: 'gym',
        upper_lower: 'lower',
        fitness_level: 'advanced',
        instructions: 'Position your body on a leg extension machine with the pad just above your ankles.  Lift the weight until your legs are almost straight, pause, then lower the weight back to the starting position.  Complete 5 sets of 10 repeitions.'
    }
    // ----- GYM END ---------------------------------------------------------------------------- //
];

const seedExercises = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercises;