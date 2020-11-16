INSERT INTO user (username, email, password)
VALUES
    ('aaron', 'aaron@email.com', 'aaronpassword'),
    ('madison', 'madison@email.com', 'madisonpassword'),
    ('jane', 'jane@email.com', 'janepassword');

INSERT INTO buddy (user_id, buddy_id)
VALUES
    (1, 2),
    (2, 3),
    (3, 1);

INSERT INTO profile (height_ft, height_in, weight, fitness_level, goal, user_id)
VALUES
    (5, 10, 150, 'advanced', 'consistency', 1),
    (5, 5, 125, 'intermediate', 'health', 2),
    (5, 3, 125, 'beginner', 'get in shape', 3);

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
