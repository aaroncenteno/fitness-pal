const User = require('./User');
const Buddy = require('./Buddy');
const Profile = require('./Profile');
const Exercise = require('./Exercise');
const Personal_Exercise = require('./Personal_Exercise');
const Workout = require('./Workout');

// a user can have many buddies
User.belongsToMany(User, {
    through: Buddy,
    as: 'buddies',
    // foreignKey: 'user_id'
})

// a user can only have one profile
User.hasOne(Profile, {
    foreignKey: 'user_id'
})

// a profile can only belong to one user
Profile.belongsTo(User, {
    foreignKey: 'user_id'
})

User.belongsToMany(Exercise, {
    through: 'UserExercise'
})

Exercise.belongsToMany(User, {
    through: 'UserExercise'
})

User.hasMany(Personal_Exercise, {
    foreignKey: 'user_id'
});

Personal_Exercise.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Workout, {
    foreignKey: 'user_id'
});

Workout.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Buddy, Profile, Exercise, Personal_Exercise, Workout };
