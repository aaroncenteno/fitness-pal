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