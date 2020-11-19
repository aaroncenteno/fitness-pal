INSERT INTO user (username, email, password)
VALUES
    ('aaron', 'aaron@email.com', 'aaronpassword'),
    ('madison', 'madison@email.com', 'madisonpassword'),
    ('jane', 'jane@email.com', 'janepassword');

INSERT INTO buddy (user_id, buddy_id)
VALUES
    (3, 1),
    (2, 3),
    (1, 2);

-- INSERT INTO profile (height_ft, height_in, weight, fitness_level, user_id)
INSERT INTO profile (height_ft, height_in, weight, fitness_level, goal, user_id)
VALUES
    (5, 10, 150, 'advanced', 'consistency, health', 1),
    (5, 5, 125, 'intermediate', 'health, strength', 2),
    (5, 3, 125, 'beginner', 'consistency, get in shape', 3);
    -- (5, 10, 150, 'advanced', 1),
    -- (5, 5, 125, 'intermediate', 2),
    -- (5, 3, 125, 'beginner', 3);


INSERT INTO exercise (exercise_name, gym_no_gym, upper_lower, fitness_level, instructions)
VALUES
    ('Push Ups - Kneeling', 'no_gym', 'upper', 'beginner', 'tbd'),
    ('Push Ups - Standard', 'no_gym', 'upper', 'intermediate', 'tbd'),
    ('Push Ups - Inverted', 'no_gym', 'upper', 'advanced', 'tbd'),
    ('Dips - Bench', 'no_gym', 'upper', 'beginner', 'tbd'),
    ('Dips - Standard', 'no_gym', 'upper', 'intermediate', 'tbd'),
    ('Dips - Bench, Weighted', 'no_gym', 'upper', 'advanced', 'tbd'),
    ('Squats - Standard', 'no_gym', 'lower', 'beginner', 'tbd'),
    ('Squats - Weighted', 'no_gym', 'lower', 'intermediate', 'tbd'),
    ('Squats - Jump ', 'no_gym', 'lower', 'advanced', 'tbd'),
    ('Lunges - Standard', 'no_gym', 'lower', 'beginner', 'tbd'),
    ('Lunges - Walking', 'no_gym', 'lower', 'intermediate', 'tbd'),
    ('Lunges - Walking, Weighted ', 'no_gym', 'lower', 'advanced', 'tbd'),
    ('Bicep Curl', 'gym', 'upper', 'beginner', 'Complete 3 sets of 10 repetitions'),
    ('Bicep Curl', 'gym', 'upper', 'intermediate', 'Complete 4 sets of 10 repetitions'),
    ('Bicep Curl', 'gym', 'upper', 'advanced', 'Complete 5 sets of 12 repetitions'),
    ('Tricep Curl', 'gym', 'upper', 'beginner', 'Complete 3 sets of 10 repetitions'),
    ('Tricep Curl', 'gym', 'upper', 'intermediate', 'Complete 4 sets of 10 repetitions'),
    ('Tricep Curl', 'gym', 'upper', 'advanced', 'Complete 5 sets of 12 repetitions'),
    ('Leg Press', 'gym', 'lower', 'beginner', 'Complete 3 sets of 10 repetitions'),
    ('Leg Press', 'gym', 'lower', 'intermediate', 'Complete 4 sets of 10 repetitions'),
    ('Leg Press', 'gym', 'lower', 'advanced', 'Complete 5 sets of 12 repetitions'),
    ('Leg Extension', 'gym', 'lower', 'beginner', 'Complete 3 sets of 10 repetitions'),
    ('Leg Extension', 'gym', 'lower', 'intermediate', 'Complete 4 sets of 10 repetitions'),
    ('Leg Extension', 'gym', 'lower', 'advanced', 'Complete 5 sets of 12 repetitions');

INSERT INTO personal_exercise (exercise_name, gym_no_gym, upper_lower, fitness_level, instructions, user_id)
VALUES
    ('Aaron Personal 1', 'no_gym', 'upper', 'beginner', 'tbd', 1),
    ('Aaron Personal 2', 'no_gym', 'upper', 'beginner', 'tbd', 1),
    ('Madison Personal 1', 'no_gym', 'lower', 'intermediate', 'tbd', 2),
    ('Madison Personal 2', 'no_gym', 'lower', 'advanced', 'tbd', 2),
    ('Jane Personal 1', 'gym', 'lower', 'intermediate', 'tbd', 3),
    ('Jane Personal 2', 'gym', 'lower', 'advanced', 'tbd', 3);

INSERT INTO workout (exercise_list, personal_list, user_id )
VALUES
    ('1, 4, 7, 10', '1', 1),
    ('13, 16, 19, 21', '2', 2),
    ('2, 8, 14, 20', '2', 3);