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

INSERT INTO profile (height_ft, height_in, weight, fitness_level,
goal_consistency, goal_getinshape, goal_health, goal_strength, goal_weightloss, user_id)
VALUES
    (5, 10, 150, 'advanced', true, true, true, true, false, 1),
    (5, 5, 125, 'intermediate', true, true, true, true, false, 2),
    (5, 3, 125, 'beginner', true, true, true, true, false, 3)