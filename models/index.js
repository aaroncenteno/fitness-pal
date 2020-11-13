const User = require('./User');
const Buddy = require('./Buddy');

// a user can have many buddies
User.belongsToMany(User, {
    through: Buddy,
    as: 'buddies'
})

module.exports = { User, Buddy };