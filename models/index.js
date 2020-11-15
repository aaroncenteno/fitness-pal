const User = require('./User');
const Buddy = require('./Buddy');
const Profile = require('./Profile');
const Exercise = require('./Exercise');

// a user can have many buddies
User.belongsToMany(User, {
    through: Buddy,
    as: 'buddies'
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

module.exports = { User, Buddy, Profile, Exercise };