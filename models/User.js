// import Model class and DataTypes object from Sequelize to create our models from 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// node package to perform hashing function
const bcrypt = require('bcrypt');

// create our User model from the Sequelize constructor
class User extends Model {
    // instance method that takes in the plaintext password retrieved from the client 
    checkPassword(loginPw) {
        // access this user's properties, i.e. the password, which was stored as a hashed string
        // compareSync confirms (true) or denies (false) that the supplied password matches the hashed password stored on the object
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// initialize the model's data and configuration
User.init(
    // first argument: defines table columns and configuration
    {
        // define columns with Sequelize DataTypes to define the data type
        // define an id column 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be any duplicate email values in this table
            unique: true,
            // use sequelize built-in validator to check for email format before creating table data
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // use sequelize built-in validator to check password is at least 4 characters long
            validate: {
                len: [4]
            }
        } 
    },
    // second argument: configures certain options for the table.
    {
        // use 'hooks' to call functions before/after calls in sequelize are executed 
        hooks: {
            // call the 'beforeCreate' function before adding data to database
            // function hashes the user's password
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            // call the 'beforeUpdate' function before updaing data in the database
            // function hashes the user's password
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },

        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

// export the newly created model so we can use it in other parts of the app
module.exports = User;